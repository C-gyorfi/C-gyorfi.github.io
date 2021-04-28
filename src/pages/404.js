import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import "../components/Hero.scss"

export default function FourOFour() {
  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          Page not found{" "}
          <span role="img" aria-label="map">
            🗺️
          </span>
        </h1>
        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link to="/">Take me home</Link>
          </span>
        </p>
      </Container>
    </section>
  )
}
