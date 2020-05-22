import React from "react"
import { Link as BrowserLink } from "react-router-dom"

const Link = ({ to, children }: { to: string, children: any }) => {
  return (
    <BrowserLink to={to} >{children} </BrowserLink>
  )
}

export default Link
