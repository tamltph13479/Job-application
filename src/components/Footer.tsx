import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (

        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <strong><span>Thực học - Thực nghiệp.</span></strong>   <hr /> Polytechnic FPT
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ */}
                    {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer