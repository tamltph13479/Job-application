import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="assets/img/112.jpg" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Le The Tam</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>Về Tôi</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Sơ yếu lý lịch</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Mục Tiêu</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Liên Hệ</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Le The Tam</h1>
                    <p> My full name's   <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
                </div>
            </section>
        </>
    )
}

export default Header