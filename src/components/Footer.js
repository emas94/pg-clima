import * as React from "react"
const Footer = () => {
  return (
    <footer>
      <div className="adress-container">
        <div className="name"> PG Clima - Klimatyzacja i wentylacja</div>
        <div className="adress">
          <p>RUSZKOWICE</p>
          <p>UL.GLOWNA 8 </p>
          <p> 26-422 BORKOWICE </p>
          <p> pgclima1993@gmail.com </p>
          <p> TEL: 796 442 852</p>
          <p> NIP: 6010091237</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Zostaw nam wiadomość</h2>
        <form action="">
          <input type="text" placeholder="Imie nazwisko" />
          <input type="email" placeholder="email" />
          <input type="phone" placeholder="Numer telefonu" />
          <textarea type="text" placeholder="Wiadomość" />
          <input type="submit" placeholder="Wyślij" />
        </form>
      </div>
    </footer>
  )
}

export default Footer