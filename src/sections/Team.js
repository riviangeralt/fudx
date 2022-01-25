import React from 'react';
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Team = (props) => {
    const team = [
        { name: "Ethan Foster", des: "Blockchain Developer", link: "https://www.instagram.com/ethanfoster232/", src: team1 },
        { name: "Emma Collins", des: "Blockchain Architect Developer", link: "https://www.instagram.com/emmacollins199/", src: team2 },
        { name: "Liza Sanjaan", des: "Public Relations - Tech Global", link: "https://www.instagram.com/lizasanajaan/", src: team3 },
        { name: "Edward Johnson", des: "Digital Marketing Head", link: "https://www.instagram.com/iedwardjohnson/", src: team4 },
        { name: "Chintan Thakkar", des: "Data Science - Digital Transformation", link: "https://www.linkedin.com/in/chintan7", src: team5 },
        { name: "Natalia Miller", des: "Graphic designer", link: "https://www.instagram.com/inataliamiller/", src: team6 },

    ]
    return (
        <section class="team-section text-center my-5" id="team" ref={props.myRef}>
            <div class="container">
                <h2 class="h1-responsive fw-bold my-5">Our Team</h2>

                <div class="row style-2 justify-content-center">
                    {team.map(person =>
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src={person.src} class="rounded-circle z-depth-1" alt={person.name} />
                            </div>
                            <h5 class="fw-bold mt-2 mb-1">{person.name}</h5>
                            <p class="text-uppercase red mb-1"><strong>{person.des}</strong></p>
                            <ul class="list-unstyled mb-4">
                                <a class="p-2 fa-lg fb-ic" href={person.link} target="_blank" rel="noreferrer">
                                    {person.link.includes('instagram') ? <InstagramIcon /> : <LinkedInIcon />}
                                    {/* <i class="fab fa-instagram blue-text"> </i> */}
                                </a>
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Team;
