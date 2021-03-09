import * as React from "react"
import Header from "./Header"
const Template = ({ children }) => {
  return (
    <>
      <div className="start-animation">
        <div className="start-image"></div>
      </div>
      <Header></Header>
      <div className="container">{children}</div>
    </>
  )
}

export default Template
