---
title: '装饰器模式'
tags:
  - 'Design Patterns'
---

装饰器模式（Decorator Pattern）属于包装模式（Wrapper Pattern）中的一种，是一种结构型设计模式。它允许在不改变对象原本结构的情况下，动态地为其添加新的行为。

## React 中常用的装饰器模式

### HOC

HOC 即高阶组件（Higher-Order Component），是 React 中常用的一种装饰器模式的实现方式。它是一个函数，接受一个组件作为参数，返回一个新的组件。

我们将通过为 Button 组件添加权限检验、用户埋点的例子，来说明如何使用 HOC 在 React 中实现装饰器模式。

首先，我们定义一个简单的 Button 组件：

```tsx
interface ButtonProps
  extends React.PropsWithChildren<React.ComponentPropsWithRef<'button'>> {}

function Button(props: ButtonProps) {
  const { children, ...restProps } = props
  return <button {...restProps}>{children}</button>
}
```

然后我们需要实现两个 HOC，一个用于权限检验，一个用于用户埋点：

```tsx
interface ComponentWithPermissionProps {
  /**
   * 权限代码
   * @description 用于权限检验
   */
  code?: string
}

function withPermission<T>(Component: React.ComponentType<Omit<T, 'code'>>) {
  return function ComponentWithPermission(
    props: T & ComponentWithPermissionProps
  ) {
    const { code, ...restProps } = props
    const hasPermission = checkPermission(code) // 假设这里是权限检验的逻辑
    return hasPermission ? <Component {...restProps} /> : <div>没有权限</div>
  }
}

const ButtonWithPermission = withPermission(Button)
```

上述代码中，`withPermission` 是一个高阶组件，它为 Button 组件添加了 `code` 属性，用于权限检验。仅当权限检验通过时，渲染 Button 组件，否则渲染一个没有权限的提示。

```tsx
interface ComponentWithTrackerProps {
  onClick?: () => void
}

function withTracker<T extends ComponentWithTrackerProps>(
  Component: React.ComponentType<T>
) {
  return function ComponentWithTracker(props: T) {
    const { onClick, ...restProps } = props

    const handleClick = () => {
      onClick?.()
      trackEvent() // 假设这里是用户埋点的逻辑
    }

    return (
      <Component
        {...restProps}
        onClick={handleClick}
      />
    )
  }
}
```

上述代码中，`withTracker` 是一个高阶组件，它修改 Button 组件的 `onClick` 属性，用于用户埋点。当 Button 组件被点击时，会触发埋点逻辑。

最后，我们可以通过组合这两个 HOC，为 Button 组件添加权限检验和用户埋点的功能：

```tsx
const ButtonWithPermissionAndTracker = withPermission(withTracker(Button))
```

在应用中使用：

```tsx
function App() {
  return (
    <ButtonWithPermissionAndTracker
      code="can:click:button"
      onClick={() => console.log('Button clicked')}
    >
      Click Me
    </ButtonWithPermissionAndTracker>
  )
}
```

通过上述例子，可以看出 HOC 是一种非常灵活的装饰器模式的实现方式。可以轻松地控制组件渲染行为，为组件添加新的属性，拦截、修改组件的属性。同时，HOC 并没有改变原有组件，只是在原有组件的基础上进行了包装。

## 参考

- [Wikipedia: Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Refactoring.Guru: Decorator](https://refactoring.guru/design-patterns/decorator)
- [Stack Overflow: How do the Proxy, Decorator, Adapter, and Bridge Patterns differ?](https://stackoverflow.com/questions/350404/how-do-the-proxy-decorator-adapter-and-bridge-patterns-differ)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
