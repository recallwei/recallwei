---
title: '封装表单验证 Hook: useForm'
tags:
  - 'Vue'
---

## 使用 yup

### 安装 yup

```bash
pnpm add yup
```

### 编写 useForm Hook

```javascript
import { ref, watch, computed } from 'vue'
import yup from 'yup'

export function useFormValidation(schema) {
  const fields = ref({})
  const errors = ref({})

  const validateField = async (field, value) => {
    try {
      await yup.reach(schema, field).validate(value)
      errors.value[field] = null
    } catch (error) {
      errors.value[field] = error.message
    }
  }

  const validateForm = async () => {
    try {
      await schema.validate(fields.value, { abortEarly: false })
      errors.value = {}
      return true
    } catch (error) {
      error.inner.forEach((err) => {
        errors.value[err.path] = err.message
      })
      return false
    }
  }

  const registerField = (field, initialValue) => {
    fields.value[field] = initialValue

    const fieldRef = ref(initialValue)

    watch(fieldRef, (newValue) => {
      fields.value[field] = newValue
      validateField(field, newValue)
    })

    return fieldRef
  }

  const isValid = computed(() => Object.keys(errors.value).length === 0)

  return {
    fields,
    errors,
    isValid,
    validateForm,
    registerField
  }
}
```

### 在 Vue 中使用

此处以 Naive UI 中使用为例。

```vue
<script setup>
import yup from 'yup'
import { useForm } from './useForm'

const schema = yup.object().shape({
  email: yup.string().email('请输入有效的邮箱地址').required('邮箱不能为空'),
  password: yup
    .string()
    .min(6, '密码长度至少为 6 个字符')
    .required('密码不能为空')
})

const { errors, registerField, validateForm, isValid } = useForm(schema)
const email = registerField('email', '')
const password = registerField('password', '')

const handleSubmit = async () => {
  if (await validateForm()) {
    // 提交表单
  }
}
</script>

<template>
  <n-form @submit.prevent="handleSubmit">
    <n-form-item label="邮箱">
      <n-input
        v-model="email"
        type="text"
        name="email"
      />
      <span v-if="errors.email">{{ errors.email }}</span>
    </n-form-item>

    <n-form-item label="密码">
      <n-input
        v-model="password"
        type="password"
        name="password"
      />
      <span v-if="errors.password">{{ errors.password }}</span>
    </n-form-item>

    <n-form-item>
      <n-button
        type="submit"
        :disabled="!isValid"
      >
        提交
      </n-button>
    </n-form-item>
  </n-form>
</template>
```

## 使用 Zod

待完善...

## 参考

[yup](https://github.com/jquense/yup#readme)
[zod](https://zod.dev/)
