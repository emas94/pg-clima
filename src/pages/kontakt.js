import React, { useState, useRef } from "react"
import "../scss/app.scss"
import Template from "../components/Template"
import "bootstrap/dist/css/bootstrap.min.css"
import { Formik } from "formik"
import { object, string, number, boolean } from "yup"
import { handleSendMessage } from "../../services/api"
const Kontakt = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const handleSubmit = async (
    { name, email, phone, message },
    { resetForm }
  ) => {
    const response = await handleSendMessage(name, email, phone, message)
    if (!response) setError(true)
    else {
      setSuccess(true)
      resetForm({})
      console.log("asdasd")
    }
  }

  const ValidationSchema = object().shape({
    name: string().required("Please provide your full name"),
    email: string()
      .required("Please provide e-mail address")
      .email("Please provide valid e-mail address"),
    phone: number().typeError("Phone number must contain only numbers"),
    message: string().required("Please provide content of your message"),
  })
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
              <p>Patryk Gil</p>
              <p>E-mail: pgclima1993@gmail.com</p>
              <p>Tel: 796 442 852</p>
              <p>NIP: 6010091237</p>
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values, resetForm) => handleSubmit(values, resetForm)}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit} method="post" name="contact-form">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Imie nazwisko"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && errors.email}
                  <input
                    type="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Numer telefonu"
                  />
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Wiadomość"
                    onChange={handleChange}
                    value={values.message}
                  />
                  <input type="submit" placeholder="Wyślij" value="Wyślij" />
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </Template>
  )
}

export default Kontakt
