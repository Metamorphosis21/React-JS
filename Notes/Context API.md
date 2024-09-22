

# React Context API

The React Context API is a powerful feature that allows for state or data to be shared across multiple components without the need for prop drilling (passing props through every level of the component tree). This is particularly useful for managing global data, such as user authentication, themes, or language settings.

## Table of Contents
- [Introduction]
- [Creating Context with `createContext`]
- [Providing Data with `Provider`]
- [Consuming Data with `Consumer`]
- [Using `useContext` Hook]
- [Example]
- [Conclusion]

## Introduction

The Context API allows components to share data globally without the need to explicitly pass props down the component tree. It provides a way to create global variables that can be passed around within the component tree.

## Creating Context with `createContext`

The `createContext` function is used to create a new context object. This object contains two components: a `Provider` and a `Consumer`.

```javascript
import React, { createContext } from 'react';

const MyContext = createContext({});
```

- `MyContext` is now an object that can be used to share data across components.

## Providing Data with `Provider`

The `Provider` component is used to wrap the part of your application where you want the context to be available. It accepts a `value` prop, which is the data you want to share.

```javascript
<MyContext.Provider value={sharedData}>
  <MyComponent />
</MyContext.Provider>
```

- `sharedData` is the data that will be accessible by any component that consumes this context.

## Consuming Data with `Consumer`

The `Consumer` component allows a component to subscribe to context changes. It uses a render prop pattern to access the context value.

```javascript
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

- The `value` inside the `Consumer` is the same as the `value` provided by the `Provider`.

## Using `useContext` Hook

In functional components, the `useContext` hook is the most convenient way to access the context. It eliminates the need for a `Consumer` component and allows you to directly use the context value.

```javascript
import { useContext } from 'react';

const value = useContext(MyContext);
```

- `useContext` accepts a context object (the value returned from `createContext`) and returns the current context value.

## Example

Here is a simple example demonstrating the use of the Context API, `createContext`, and `useContext`.

```javascript
import React, { createContext, useState, useContext } from 'react';

// 1. Create a context
const ThemeContext = createContext();

// 2. Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a component that uses the context
const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>The current theme is {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

// 4. Use the provider in your app
const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
```

- The `ThemeProvider` wraps the `ThemedComponent`, and the theme state is shared across the application without prop drilling.
- The `ThemedComponent` can access and update the theme directly through the context.

## Conclusion

The React Context API, along with `createContext` and `useContext`, provides a clean and effective way to manage global state or data in your applications. While it's a powerful tool, it should be used carefully to avoid overcomplicating your component logic and making your application harder to debug.

