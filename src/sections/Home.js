import React from 'react';

const Home = (props) => {
    return (
        <>
            <div className="home" ref={props.myRef}>
                <div className="container text-center">
                    <h1 className='text-white mb-4' style={{ fontSize: '2.625rem' }}>Blockchain Based Hyperlocal Hospitality Ecosystem</h1>
                    <p className='text-white mx-auto mb-3' style={{ fontSize: '1.125rem', width: "63pc" }}><strong>FUDX is a 'one stop' delivery service</strong> that enables users to order anything they like from the nearest store in shortest amount of time using <strong>blockchain technology.</strong></p>
                    <a href="https://t.me/+QDgoL_rOT303MWFl" target="_blank" rel="noreferrer" className="btn">Join Us</a>
                    <a href="Assets/whitepaper.pdf" target="_blank" rel="noreferrer" className="btn btn-inverse">View White Paper</a>
                    <a href="know-more.php" className="btn btn-red">More About Crypto</a>
                </div>
            </div >
            <div className="col-md-12 mt-2 mb-2" style={{ position: "absolute", bottom: "40px" }}>
                <div className="d-flex justify-content-between align-items-center breaking-news bg-black" style={{ padding: "5px" }}>
                </div>
            </div>
        </>

    );
};

export default Home;
