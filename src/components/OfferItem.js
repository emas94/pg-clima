import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
const OfferItem = ({ offer }) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="" centered>
        <ModalHeader toggle={toggle}>Skontaktuj się z nami</ModalHeader>
        <ModalBody>
          <div className="contact-form">
            <form action="#" method="post">
              <input
                className="input-model"
                name="model"
                readOnly
                value={offer.data.model[0].text}
              />

              <input type="text" name="name" placeholder="Imie nazwisko" />
              <input type="email" placeholder="email" />
              <input type="phone" placeholder="Numer telefonu" />
              <textarea type="text" placeholder="Wiadomość" />
              <input type="submit" placeholder="Wyślij" />
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Anuluj
          </Button>
        </ModalFooter>
      </Modal>
      <div className="offer-item">
        <div className="name">{offer.data.model[0].text}</div>
        <div className="data">
          <p>Wysokość: {offer.data.height[0].text}</p>
          <p>Szerokość:{offer.data.width[0].text}</p>
          <p>
            {offer.data.description[0]
              ? "Opis: " + offer.data.description[0].text
              : null}
          </p>
        </div>
        <div className="price">
          <button onClick={toggle}>
            {/* <a href="../kontakt">Zamów</a> */}
            Skontaktuj się
          </button>
        </div>
      </div>
    </>
  )
}

export default OfferItem
