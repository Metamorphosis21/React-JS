import { configureStore } from '@reduxjs/toolkit'
// configureStore ( function used to create a Redux store with a simplified configuration ) importted from @reduxjs/toolkit package ( is a package that provides a set of tools and utilities to help you build robust and maintainable Redux applications )
import todoReducer  from '../App Features/TodoFeatures/TodoSlicer'


export const store = configureStore({
    reducer : todoReducer
})
// configureStore function usually takes objects as parameter