import * as React from "react"
import "../scss/app.scss"
import Template from "../components/Template"
import "bootstrap/dist/css/bootstrap.min.css"
const Kontakt = () => {
  return (
    <Template>
      <div className="contact-container">
        <h2 className="default-header">Skontaktuj się z nami</h2>
        <div className="contact-form">
          <div className="card">
            <div className="logo">
              <h2>PG Clima</h2>
            </div>
            <div className="content">
              <p>E-mail: pgclima1993@gmail.com</p>
              <p>Tel: 796 442 852</p>
              <p>NIP: 6010091237</p>
              <p>Tel: 121312313</p>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="Imie nazwisko" />
            <input type="email" placeholder="email" />
            <input type="phone" placeholder="Numer telefonu" />
            <textarea type="text" placeholder="Wiadomość" />
            <input type="submit" placeholder="Wyślij" value="Wyślij" />
          </form>
        </div>
      </div>
    </Template>
  )
}

export default Kontakt
