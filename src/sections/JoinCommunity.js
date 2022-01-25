import React from 'react';

const JoinCommunity = (props) => {
    const socials = [
        { url: "https://www.facebook.com/thefudxcoin/", icon: "fab fa-facebook-f" },
        { url: "https://twitter.com/thefudxcoin?t=07NxFpPTXX5JNx1tCvvsSg&amp;s=09", icon: "fab fa-twitter" },
        { url: "https://t.me/+QDgoL_rOT303MWFl", icon: "fab fa-telegram" },
        { url: "https://linktr.ee/FUDXCoin", icon: "fas fa-link" },
        { url: "https://www.instagram.com/fudxcoin/", icon: "fab fa-instagram" },
        { url: "https://www.linkedin.com/in/fudx-coin-b66a06220", icon: "fab fa-linkedin" },
        { url: "https://www.youtube.com/channel/UCwkX9anM7ZLeOqXUhlVCS7w", icon: "fab fa-youtube" },
        { url: "https://www.reddit.com/user/FUDXCoin?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf", icon: "fab fa-reddit" },
        { url: "https://discord.gg/Wfe9hZjJVq", icon: "fab fa-discord" },
        { url: "https://wa.me/18457278901", icon: "fab fa-whatsapp" },

    ]
    return (
        <section className="community-sec padding-top-150 padding-bottom-150" ref={props.myRef}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="sm-intro">
                            <h2>Join our community</h2>
                            <ul className="socials">
                                {socials.map(social =>
                                    <li><a href={social.url} target="_blank" rel="noreferrer"><i className={social.icon}></i></a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="news-letter">
                            <h2>Contact Us</h2>
                            <p style={{ color: "#FFF" }}>
                                Email : <a href="mailto:contact@fudxcoin.com" style={{ color: "#FFF" }}>contact@fudxcoin.com</a><br />
                                Web : <a href="https://www.fudxcoin.com" style={{ color: "#FFF" }}>https://www.fudxcoin.com</a><br />
                                Address : 1309, Coffeen Ave Ste 1200 sheridan WY 82801
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="news-letter">
                            <h3>Subscribe to our newsletter</h3>
                            <form className="mb-5 pb-3">
                                <input type="email" placeholder="Enter your email address" id="news_email" name="news_email" required="" />
                                <button id="frmlead" type="submit">Send</button>
                            </form>
                            <div className="alert alt_lead alert-primary" role="alert" style={{ display: "none" }}>
                                A simple primary alert—check it out!
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;
