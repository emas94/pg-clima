import React, { useRef, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useRootContext } from "../store/rootContext"

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
    breakpoint: { max: 1324, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
}
const Homepage = () => {
  const aboutUsRef = useRef(null)
  const { saveRef } = useRootContext()
  useEffect(() => {
    saveRef(aboutUsRef)
  }, [])
  return (
    <div className="home-container">
      <h1 className="default-header" ref={aboutUsRef}>
        PG Clima - Klimatyzacja i wentylacja
      </h1>
      <div className="home-content">
        To firma świadcząca kompleksowe usługi z zakresu montażu, serwisu oraz
        naprawy urządzeń klimatyzacyjnych i wentylacyjnych. Oferujemy montaż
        klimatyzacji typu split, multisplit, VRF, VRV.
        <p>
          Nasze usługi kierujemy do:
          <span> osób prywatnych, firm, instytucji. </span>
        </p>
        Oferujemy profesjonalny montaż. Posiadamy uprawnienia{" "}
        <span>F-Gaz </span>
        oraz<span> SEP</span>. Działamy na terenie Warszawy i okolic.
        <p>
          Zajmujemy się kompleksowym wykonaniem usługi, od
          <span> bezpłatnej</span> wyceny, poprzez dobór i zakup odpowiedniego
          urządzenia, do montażu i uruchomienia.
        </p>
      </div>
      <div className="home-carousel">
        <h2 className="default-header">
          Działamy we współpracy z poszczególnymi markami
        </h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          keyBoardControl={true}
          showDots={true}
          dotListClass="custom-dot"
        >
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img mb"></div>
            <div className="bottom">Mitsubishi</div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img lg"></div>
            <div className="bottom"> LG</div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img haier"></div>
            <div className="bottom">Haier</div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img gree "></div>
            <div className="bottom">Gree</div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img aux"></div>
            <div className="bottom">AUX </div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img serva"></div>
            <div className="bottom">ServA </div>
          </div>
          <div className="carousel-item">
            <div className="view-more">
              <button>
                <a href="./oferta/mitsubishi">Zobacz ofertę</a>{" "}
              </button>
            </div>
            <div className="offer-img kaisai"></div>
            <div className="bottom">Kaisai </div>
          </div>
        </Carousel>
      </div>
      <h2 className="default-header">Poznaj nasze wartości</h2>
      <div className="values">
        <div className="item-container">
          <div className="item clients"></div>
          <div>
            <p className="title">100%</p>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
        <div className="item-container">
          <div className="item brand"></div>
          <div>
            <p className="title ">30</p>
            <p>
              Autoryzowanych marek,<br></br> z którymi współpracujemy
            </p>
          </div>
        </div>
        <div className="item-container">
          <div className="item knowledge"></div>
          <div>
            <p className="title">1:1</p>
            <p>
              Indywidualne podejście <br></br>do każdego naszego klienta
            </p>
          </div>
        </div>
        <div className="item-container">
          <div className="item hard-work"></div>
          <div>
            <p className="title">100%</p>
            <p>Cięzka praca</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
