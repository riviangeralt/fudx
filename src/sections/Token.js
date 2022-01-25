import React from 'react';

const Token = (props) => {
    return (
        <section className="distri drk" style={{ padding: '9.375rem 0' }} ref={props.myRef}>
            <div className="container">
                <div className="row both">
                    <div className="col-md-6">
                        <div className="row text-center justify-content-center">
                            <div className="col-md-12">
                                <h3>AIRDROP</h3>
                                <div className="countdown" style={{ background: 'none' }}>
                                    <div><a href="#." className="btn register btn-inverse">Register</a></div>
                                    <div style={{ marginBottom: "1rem" }} className="mint_box"><input type="text" placeholder="Enter Code" className="_amount code" name="claim" id="" /><a href="#." className="btn claim claimBtn btn-inverse" style={{ width: "35%", marginTop: '-.2rem' }}>Claim Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="row text-center justify-content-center">
                            <div className="col-md-12">
                                <h3>TOKEN SALE</h3>

                                <div className="countdown">
                                    <div className="mint_box">
                                        <input className="_amount amount" placeholder="Enter Buy Amount " min="0" type="number" /><a href="#." className="mint btn btn-inverse" style={{ width: "25%", marginTop: '-.2rem' }}>Buy Now</a></div>
                                    <h5 style={{ marginTop: "1rem", color: "#ccc" }}>1 Token for 0.30 Binance USDT</h5>
                                    <a href="#home" id="copytoclipboard" className="btn btn-red">BSC-USDT Smart Contract address</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Token;
