import * as React from "react"
import "../scss/app.scss"
import Template from "../components/Template"
import Homepage from "../components/Homepage"
import "bootstrap/dist/css/bootstrap.min.css"
// markup
const IndexPage = () => {
  return (
    <Template>
      <Homepage />
    </Template>
  )
}

export default IndexPage
