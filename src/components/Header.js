import * as React from "react"
import Navigation from "./Navigation"
const Header = () => {
  return (
    <header>
      <div className="top">
        <p className="title">
          <a href="../">PG Clima</a>
        </p>
        <Navigation></Navigation>
      </div>
      <div className="hero"></div>
    </header>
  )
}

export default Header
