import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
const Template = ({ children }) => {
  return (
    <>
      <div className="start-animation">
        <div className="start-image"></div>
      </div>
      <Header></Header>
      <div className="container">
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}

export default Template
