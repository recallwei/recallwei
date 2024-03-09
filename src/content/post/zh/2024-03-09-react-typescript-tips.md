---
title: '如何在 React 项目中正确使用 TypeScript'
tags:
  - 'React'
  - 'TypeScript'
---

类型安全是我们在使用 TypeScript 时最大的优势，但是在 React 项目中，我们如何正确使用 TypeScript 呢，也许本文能给你带来一些帮助。

## 标注 React 组件的类型

假设我们有这样一个 `Card` 组件，其包含了 `title` 属性用于显示标题及 `onClick` 点击事件：

```tsx
interface CardProps {
  className?: string
  children: React.ReactNode
  title?: string
  onClick?: (e: React.MouseEvent) => void
}

function Card(props: CardProps) {
  return (
    <div
      className="rounder-xl"
      onClick={props.onClick}
    >
      <span>{props.title}</span>
      {props.children}
    </div>
  )
}
```

### 如何传递 className

通常我们会为组件添加 `className`，在 React 中我们需要借助一些第三方库如 `classnames` 或 `clsx` 来处理：

```tsx
function Card(props: CardProps) {
  const { className, children, ...rest } = props
  return (
    <div className={clsx('rounder-xl', className)}>
      <span>{rest.title}</span>
      {children}
    </div>
  )
}
```

### 如何继承 HTML 原生标签的属性

我们可以使用 `React.HTMLAttributes` 来继承 HTML 原生标签的属性：

```tsx
// Bad ❌
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
```

更加推荐的方式是使用 `React.ComponentProps` 来继承 HTML 原生标签的属性：

```tsx
// Good ✅
interface CardProps extends React.ComponentProps<'div'> {}
```

再具体一点，我们可以同时指定是否暴露 `ref` 属性给外部：

```tsx
interface CardProps extends React.ComponentPropsWithRef<'div'> {}

// Perfect ✅
interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}
```

这样我们就可以让 `CardProps` 具有所有 `div` 标签的属性，同时不暴露 `ref` 属性给外部。

```tsx
interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  title?: string
}

function Card(props: CardProps) {
  const { className, children, title, ...rest } = props
  return (
    <div
      className={clsx('rounder-xl', className)}
      {...rest}
    >
      <span>{title}</span>
      {children}
    </div>
  )
}
```

`CardProps` 继承了 `div` 的属性后，通过 `{...rest}` 传参，我们省去了手动绑定 `onClick` 事件。

注意：上面将 `className` 单独解构，是为了防止传入 `className` 覆盖了组件内部的 `className`。

## 范型组件

### 动态指定标签类型

如果我们需要动态指定 `Card` 组件最外层的标签类型：

```tsx
type CardProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> &
    React.PropsWithChildren<{
      tag?: T
      title?: string
    }>

function Card<T extends React.ElementType = 'div'>(props: CardProps<T>) {
  const { tag: Component = 'div', children, title, ...rest } = props
  return (
    <Component {...rest}>
      <span>{title}</span>
      {children}
    </Component>
  )
}
```

这样我们可以通过 `tag` 属性控制 `Card` 组件最外层的标签类型，且可以通过范型来得到对应标签的类型提示。

此时默认 `Card` 最外层的标签为 `div`，我们仅可以传递 `div` 的属性，如果将 `tag` 属性指定为 `button`，则可以传递 `button` 的属性，如 `disabled`，这个属性是不在 `div` 上的。

### 在 .tsx 文件中为箭头函数添加范型

在 `.tsx` 文件中为箭头函数添加范型时，如果仅有 T，需要在后面添加 `,` 防止范型被识别为 JSX 语法：

这样编译器无法识别：

```tsx
const Card = <T>() => {}
```

这样就不会报错了：

```tsx
const Card = <T,>() => {}
```

### 实现可以动态渲染的列表组件

```tsx
interface CardListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function CardList<T>(props: CardListProps<T>) {
  return (
    <div className="flex flex-col space-y-4">
      {props.items.map(props.renderItem)}
    </div>
  )
}
```

上述代码定义了一个 `CardList` 组件，其接受一个 `items` 数组和一个 `renderItem` 函数，用于渲染列表中的每一项。

根据我们的数据类型进行渲染：

```tsx
interface Framework {
  id: number
  name: string
}

const data = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Vue' },
  { id: 3, name: 'Angular' }
]

const App = () => {
  return (
    <CardList<Framework>
      items={data}
      renderItem={(framework) => {
        return (
          <div>
            <span>{framework.id}</span>
            <span>{framework.name}</span>
          </div>
        )
      }}
    />
  )
}
```

上述代码我们可以通过传入 `Framework` 类型来指定 `CardList` 组件的数据类型，`renderItem` 函数也会根据 `Framework` 类型拿到对应的参数类型。

这是一个常见的 React 进阶技术，叫做 Render Props，这方便了我们在父组件中进行自定义渲染，同时也实现了组件的关注点分离。在 React Native 中，`FlatList` 组件就是采用了这样的方式进行了封装。

## 类型缩窄

如果需要根据属性条件渲染组件，我们可以基于 TypeScript 的类型缩窄来实现：

```tsx
interface ButtonProps {
  text?: string
}

interface LinkProps {
  href?: string
  text?: string
}

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'href' in props
}

function Clickable(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    // 此处的 Props 类型为 LinkProps
    return <a href={props.href}>{props.text}</a>
  } else {
    // 此处的 Props 类型为 ButtonProps
    return <button>{props.text}</button>
  }
}
```

上述代码可以根据是否传入 `href` 属性来渲染 `a` 标签或 `button` 标签。

## 事件处理

我们可以通过 `React.MouseEventHandler` 和 `React.ChangeEventHandler` 来定义事件处理的类型：

```tsx
interface DemoProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Good ✅
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e.currentTarget)
}

// Good ✅
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  console.log(e.currentTarget.value)
}

// Bad ❌
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget)
}

// Bad ❌
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value)
}

function Demo(props: DemoProps) {
  return (
    <div>
      <button onClick={props.onClick}>Click</button>
      <input onChange={props.onChange} />
    </div>
  )
}
```

使用 `React.MouseEvent` 和 `React.ChangeEvent` 并不推荐，它们仅仅只能限定事件的参数类型。
