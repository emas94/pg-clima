import * as React from "react"
import "../scss/app.scss"
import Template from "../components/Template"
import Homepage from "../components/Homepage"
import "bootstrap/dist/css/bootstrap.min.css"
import RootProvider from "../store/rootContext"
// markup
const IndexPage = () => {
  return (
    <RootProvider>
      <Template>
        <Homepage />
      </Template>
    </RootProvider>
  )
}

export default IndexPage
