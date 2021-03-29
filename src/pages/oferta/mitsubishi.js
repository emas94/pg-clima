import React, { useState, useEffect } from "react"
import Template from "../../components/Template"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Prismic from "@prismicio/client"
import OfferItem from "../../components/OfferItem"
import RootProvider from "../../store/rootContext"
import { RootContext } from "../../store/rootContext"
const Client = Prismic.client(process.env.PRISMIC_API_URL)
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
}
// markup
const MitsubishiPage = () => {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "mitsubishi")
      )
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])
  return (
    <RootProvider>
      <Template>
        <div className="offer">
          <div className="container">
            <h2 className="default-header">
              Mitsubishi - sprawdź naszą ofertę
            </h2>

            <p className="text-content">
              Od dziś klimatyzatory Deluxe i Mirror wnoszą świeżość natury do
              Twojego domu. Całkowicie nowy system AirCare Complete wykorzystuje
              proces filtracji z UVnanoTM i jonizatorem, który usuwa drobny
              kurz, a nawet bakterie, zapewniając, że powietrze, którym
              oddychasz, jest zawsze świeże. Oddychaj naturą w swoim domu.
            </p>
            <a href="" className="download">
              Pobierz całą ofertę
            </a>
            <div className="offers-carousel">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                keyBoardControl={true}
                showDots={true}
                dotListClass="custom-dot"
              >
                {doc ? (
                  doc.map((r) => {
                    return <OfferItem key={r.id} offer={r}></OfferItem>
                  })
                ) : (
                  <div></div>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </Template>
    </RootProvider>
  )
}

export default MitsubishiPage
