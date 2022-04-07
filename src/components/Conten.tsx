import React from 'react'
import About from './layoutPase/About'
import Contact from './layoutPase/Contact'
import Portfolio from './layoutPase/Portfolio'
import Resume from './layoutPase/Resume'
import Services from './layoutPase/Services'
import Skills from './layoutPase/Skills'
import Testimonials from './layoutPase/Testimonials'


type Props = {}

const Conten = (props: Props) => {
    return (
        <>
            <main id="main">
                <section id="about" className="about">
                    <About />
                </section>
                <section id="facts" className="facts">
                    {/* <Facts /> */}
                </section>
                <section id="skills" className="skills section-bg">
                    <Skills />
                </section>
                <section id="resume" className="resume">
                    <Resume />
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <Portfolio />
                </section>
                <section id="services" className="services">
                    <Services />
                </section>
                <section id="testimonials" className="testimonials section-bg">
                    <Testimonials />
                </section>
                <section id="contact" className="contact">
                    <Contact />
                </section>
            </main>
        </>
    )
}

export default Conten