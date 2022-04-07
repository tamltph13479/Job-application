import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>Thành Thạo</h2>
                <p>Trong thời gian học tập tôi có tích lũy và hiểu biết thêm</p>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">Tất Cả</li>
                        <li data-filter=".filter-app">Ứng dụng- Phần Mềm</li>

                    </ul>
                </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/1.png" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/2.png" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/4.png" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/5.png" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/6.jpg" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/7.png" className="img-fluid" />
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Portfolio