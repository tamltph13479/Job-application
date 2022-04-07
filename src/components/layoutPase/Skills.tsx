import React from 'react'

type Props = {}

const Skills = (props: Props) => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>Kỹ Năng</h2>
                <p>Dưới đây là một số kỹ năng sau quá trình học tập và rèn luyện</p>
            </div>
            <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="progress">
                        <span className="skill">HTML <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">JavaScript/reactjs <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                    <div className="progress">
                        <span className="skill">PHP <i className="val">50%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">WordPress/CMS <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">Photoshop <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills