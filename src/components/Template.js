import * as React from "react"
import Header from "./Header"
const Template = ({ children }) => {
  return (
    <>
      <div className="start-animation">
        <Header></Header>
        <div className="start-image"></div>
      </div>
      <div className="container">{children}</div>
    </>
  )
}

export default Template
