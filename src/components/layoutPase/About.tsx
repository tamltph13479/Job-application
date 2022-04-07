import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>Thông tin cá nhân</h2>
                <p>Chào Anh/Chị ! Tôi tên là Tâm, Sinh viên Trường Cao Đẳng FPT Polytechnic , dưới đây là một số thông tin về tôi  </p>
            </div>
            <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/112.jpg" className="img-fluid" />

                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Lê Thế Tâm</h3>
                    {/* <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right" /> <strong>Ngày Sinh:</strong> <span>26/9/1998</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Độ Tuổi:</strong> <span>24</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Điện Thoại:</strong> <span>0386829919</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Quê Quán:</strong> <span>Thanh Hóa</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right" /> <strong>Facebook:</strong> <span>https://www.facebook.com/Thetam1998/ </span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Trình Độ:</strong> <span>Cao Đẳng </span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>Thetam1998@gmail.com</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Chuyên Ngành:</strong> <span>Develope,WebDesign</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        Là một người vui vẻ hòa đồng , vui tính , thích xem phim và nghe nhạc . Tham gia các hoạt động ngoài trời , du lịch
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About