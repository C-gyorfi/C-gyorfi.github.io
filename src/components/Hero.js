import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import "./Hero.scss"
import ThemeSwitcher from "gatsby-theme-simple-blog/src/components/ThemeSwitcher"

const Hero = ({ data }) => {
  const { aboutMe } = data.site.siteMetadata
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <ThemeSwitcher />
          <h1 className="hero-title">
            {aboutMe &&
              aboutMe.map(element => {
                return (
                  <>
                    {element}
                    <br />
                  </>
                )
              })}
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="blog">Know more</Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Hero
