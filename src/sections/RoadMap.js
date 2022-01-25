import React from 'react';

const RoadMap = (props) => {
    const timelineElement = [
        { name: 'Delivery Application', year: '2018', text: '(Food,Grocery,Medicine, Dairy Products)' },
        { name: 'Billing Software', year: '2021' },
        { name: 'Fudx Elite', year: '2022' },
        { name: 'Fudx Coin (CEX)', year: '2022' },
        { name: 'Loyalty Program', year: '2022' },
        { name: 'FUDX Wallet', year: '2022' },
        { name: 'Interaction with Movie theatres', year: '2023' },
        { name: 'Air ticket booking', year: '2023' },
        { name: 'Hotel room Booking', year: '2023' },
        { name: 'F11', year: '2023' },
        { name: 'FUDX Coin circulation', year: '2023', text: "in 'regulated’ countries / 'regulated’ market" },
        { name: 'FPay', year: '2023' },
        { name: 'FappChat', year: '2023' }
    ]
    return (
        <section className="road-map padding-top-150 padding-bottom-50" id="roadmap" ref={props.myRef}>
            <div className="container">
                <h3 className="fw-bold text-center dark-grey-text pb-2">Product Roadmap</h3>
                <hr className="w-header my-4" />
                <p className="lead text-center text-muted pt-2 mb-5">Current Products / <span className="red">Future Products</span></p>

                <div className="row">
                    <div className="col-lg-10 mx-auto">

                        <ol className="timeline">
                            {timelineElement.map(timeline =>
                                <li className="timeline-element">
                                    <h5 className="fw-bold dark-grey-text mb-1">{timeline.name}</h5>
                                    <span className={timeline.year > 2021 ? "red-back" : ''}>{timeline.year}</span>
                                    <p>{timeline.text ? timeline.text : null}</p>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
