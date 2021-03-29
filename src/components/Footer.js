import * as React from "react"
const Footer = () => {
  return (
    <footer>
      <div className="address-container">
        <div className="name"> PG Clima - Klimatyzacja i wentylacja</div>
        <div className="adress">
          <p>Ruszkowice ul. Główna 8</p>
          <p> 26-422 Borkowice </p>
          <p> Mail: pgclima1993@gmail.com </p>
          <p> Tel: 796 442 852</p>
          <p> NIP: 6010091237</p>
          <ul>
            <li className="face">
              <a href="">facebook</a>
            </li>
            <li className="insta">
              <a href="">instagram</a>
            </li>
            <li className="contact">
              <a href="../kontakt">mail</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
