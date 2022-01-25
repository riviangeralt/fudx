import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parse from 'html-react-parser';


const Faq = () => {
    const accordionData = [
        { heading: 'What is FUDx Coins ?', summary: "It’s a erc20 crypto token deployed on binance , polygon and ehtherium platform <br />Fudx coin is backed by genuine , strong business , very dedicated and experienced team <br />Fudx coin will be soon available on centralised exchanges <br />Currently fudx coin is on decentralised exchanges , sushiswap , pancakeswap and few more <br />There is not just demand and supply to it , there are multiple business where the tokenomics and the price of the token will depend on" },
        { heading: ' Why FUDx Coins is Best ?', summary: "Holder of the token will be able to buy products and services using the token and that too with some special and extra discounted rates<br />Fux token will help people raise the standard of living <br />Total supply of the token will be leveraged for customers to enjoy the services attached with it <br />Using the token will be more beneficial than the fiat currency" },
        { heading: 'Our  Vision', summary: "The ideology of our vision is to continuously apply and set the highest standards of Service Quality. In similar way justify and uphold the reputation that we have among the customers, partners, competitors and the wider community. We use and constantly introduce environment friendly technologies and processes in order to remain in balance with nature and also meet the needs of contemporary society. Tradition is a testament to our success but in the future we also want to embrace the changes that modern time brings and become more attractive in the market and more interesting to our customers and partners." },
        { heading: 'Our Mission', summary: "The mission of FUDX TOKEN is to put Hospitality Services on the highest level in order to satisfy the demands and expectations of customers. Our aim is to make FUDX TOKEN the most preferred Hospitality and Trusted destination ON A BLOCKCHAIN TECHNOLOGY." },
        { heading: 'Our Goal', summary: "To achieve 100 percent growth and success by providing high standard of quality service to the society. Our main goal is to strive towards a positive environment of loyalty, honesty and courtesy by providing high class services to our customers, clients and employees." },

    ]
    return (
        <section className="light-bg padding-top-150 padding-bottom-150" id="team">
            <div className="container">
                <div className="heading text-center">
                    <h2>Frequently asked questions</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel-group accordion" id="accordion">
                            {accordionData.map(data =>
                                <Accordion style={{ boxShadow: 'none ', marginBottom: '1rem' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1) ' }}
                                    >
                                        <div className="panel-heading">
                                            <h4 className="panel-title"> <a href="#home" data-toggle="collapse" className="collapsed">{data.heading}</a> </h4>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ backgroundColor: 'rgba(245,245,245,1)', padding: '0' }}>
                                        <div className="panel-body" style={{ backgroundColor: 'transparent' }}>{parse(data.summary)}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
