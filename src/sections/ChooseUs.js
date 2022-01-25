import React from 'react';
import choose from '../assets/choose.png'
import smartphone from '../assets/svg/fi-rr-smartphone.svg'
import world from '../assets/svg/fi-rr-world.svg'
import shield from '../assets/svg/fi-rr-shield.svg'
import card from '../assets/svg/fi-rr-credit-card.svg'
import money from '../assets/svg/fi-rr-money.svg'



const ChooseUs = (props) => {
    const services = [
        {
            imgsrc: smartphone,
            heading: 'Peer-to-Peer Transactions',
            content: 'Peer-to-peer transactions are electronic money transfers made from one person to another through an intermediary, typically referred to as a P2P payment'
        },
        {
            imgsrc: world,
            heading: 'Borderless Payments',
            content: 'Borderless payment refers to any account, which allows users to spend, send and receive money across different countries and all fiat &amp; crypo currencies, without incurring heavy fees'
        },
        {
            imgsrc: shield,
            heading: 'Fraud Prevention',
            content: 'Fraud prevention is the implementation of a strategy to detect fraudulent transactions or banking actions and prevent these actions from causing financial and reputational damage to the customer and financial institution'
        },
        {
            imgsrc: card,
            heading: 'Smart Money',
            content: 'Smart money is the capital that is being controlled by institutional investors, market mavens, central banks, funds, individuals and other financial professionals.'
        },
        {
            imgsrc: smartphone,
            heading: 'Secure Wallet',
            content: 'Broadly speaking, a blockchain wallet is a digital wallet that allows users to store, manage, and trade their cryptocurrencies. ... Blockchain Wallet has a number of security features to prevent theft, including by company insiders'
        },
        {
            imgsrc: money,
            heading: 'Easy To Buy & Sell',
            content: 'If a job or action is easy, you can do it without difficulty or effort, because it is not complicated and causes no problems.'
        },
    ]
    return (
        <div class="container section-padding" ref={props.myRef}>

            {/* <!-- Why Choose Us  ROW--> */}
            <div class="row">
                <div class="col-md-7 margin-top-60">

                    {/* <!-- Tittle --> */}
                    <div class="heading margin-bottom-20">
                        <h6 class="margin-bottom-10">The world’s only enterprise blockchain solution for Hyperlocal Hospitality Ecosystem</h6>
                        <h5 style={{ fontSize: '1.25rem', width: '36pc' }}>Delivery Utility &amp; Rewards Token powered by Blockchain Technology</h5>
                    </div>
                    <ol class="mylist_1_a">
                        <li><strong>FUDX token</strong> will be issued against every transaction done on FUDX delivery and services app. </li>
                        <li>These tokens will be accrued to users wallet as a reward for availing service and being a customer of <strong>FUDX platform.</strong></li>
                        <li>Customers can also buy tokens from crowd sale or on various <strong>CEX and DEX platforms</strong> at the given prevalent price.</li>
                        <li>Token thus accumulated can be exchanged for various gifts, goods and services at various merchants and online <strong>e commerce stores.</strong></li>
                        <li>Tokens at merchant establishments &amp; e commerce stores will be burnt in exchange for <strong>fiat money</strong> on a periodic basis thus  reducing total supply and pushing up token value.</li>
                    </ol>
                    {/* <p>
                    </p> */}
                    {/* <!-- <div class="ultra-ser"> <span><span class="name"> Webicode &nbsp; - &nbsp;</span> <span>Ceo/Founder Chain</span></span> </div> --> */}
                </div>

                {/* <!-- Image --> */}
                <div class="col-md-5 text-right"> <img src={choose} style={{ maxWidth: '100%' }} alt="Why Choose Us" /> </div>
            </div>

            {/* <!-- Services ROW --> */}
            <div class="row">

                {/* <!-- Services --> */}
                {services.map(service =>
                    <div class="col-md-4">
                        <div class="ib-icon"> <img src={service.imgsrc} width='40px' alt={service.heading} /> </div>
                        <div class="ib-info">
                            <h4 class="h6 fw-bold">{service.heading}</h4>
                            <p>{service.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ChooseUs;
