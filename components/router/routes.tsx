import React from "react"
import Home from "../screens"
import About from "../screens/about"

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
]

export default routes
