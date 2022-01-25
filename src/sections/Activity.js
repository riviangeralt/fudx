import React from 'react';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'


const Activity = (props) => {
    return (
        <section class="dev-activ text-center dark-grey-text padding-top-150 padding-bottom-150" id="activity" ref={props.myRef}>
            <div class="container">
                <div class="sm-intro">
                    <h2>Our Verticals</h2>
                    {/* <!-- <p>Billing software for restaurants with integrated feature like</p> --> */}
                </div>
                <div class="row text-center d-flex justify-content-center my-5">
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="https://www.thefudx.com" target="_blank" rel="noreferrer">
                            <img style={{ width: "100px" }} alt="F11" src={img1} /><br />
                            {/* <!-- <i class="flaticon-team"></i>  --> */}
                            <span>FUDx delivery</span>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="Assets/abundantia_billing_software.pdf" target="_blank">
                            <img style={{ width: "100px" }} alt="F11" src={img2} /><br />
                            {/* <!-- <i class="flaticon-building"></i>  --> */}
                            <span>Abundantia Billing Software</span>
                        </a>
                        {/* <!-- <p>(Manager)</p> --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="Assets/elite.pdf" target="_blank">
                            <img style={{ width: "100px" }} alt="F11" src={img3} /><br />
                            {/* <!-- <i class="flaticon-smartphone"></i>  --> */}
                            <span>Elite</span>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="Assets/f11.pdf" target="_blank">
                            <img style={{ width: "100px" }} alt="F11" src={img4} /><br />
                            <span>F11</span>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="Assets/fpay.pdf" target="_blank">
                            <img style={{ width: "100px" }} alt="F11" src={img5} /><br />
                            <span>FPay</span>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <a href="Assets/fappchat.pdf" target="_blank">
                            <img style={{ width: "100px" }} alt="F11" src={img6} /><br />
                            <span>FappChat</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Activity;
