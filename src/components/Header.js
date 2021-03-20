import * as React from "react"
import Navigation from "./Navigation"
const Header = () => {
  return (
    <header>
      <div className="top">
        <p className="title">PG Clima</p>
        <Navigation></Navigation>
      </div>
      <div className="hero"></div>
    </header>
  )
}

export default Header
