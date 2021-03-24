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
          <form action="">
            <input type="text" placeholder="Imie nazwisko" />
            <input type="email" placeholder="email" />
            <input type="phone" placeholder="Numer telefonu" />
            <textarea type="text" placeholder="Wiadomość" />
            <input type="submit" placeholder="Wyślij" />
          </form>
        </div>
      </div>
    </Template>
  )
}

export default Kontakt
