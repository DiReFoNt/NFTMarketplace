import React from 'react';
import { CardArtist } from '../index.jsx';
import { Button } from '../UI';
import '../../styles/Artists.css';


const Artists = () => {
    // Data Artists
    const cardArtistsDataBlockA = [
        { imgSrc: "/img/artist/artist1/artist1.png", logoSrc: "/img/artist/artist1/artist-logo.png", name: "Osvaldo Percy", },
        { imgSrc: "/img/artist/artist2/artist2.png", logoSrc: "/img/artist/artist2/artist-logo2.png", name: "Ranson Sqiure" },
        { imgSrc: "/img/artist/artist4/artist4.png", logoSrc: "/img/artist/artist4/artist-logo4.png", name: "Sebastian Waltan" },
        { imgSrc: "/img/artist/artist5/artist5.png", logoSrc: "/img/artist/artist5/artist-logo5.png", name: "Abraham Zack" }
    ]

    const cardArtistsDataBlockB = [
        { imgSrc: "/img/artist/artist3/artist3.png", logoSrc: "/img/artist/artist3/artist-logo3.png", name: "Cristio leo" }
    ]

    // Function to render in Data to component Card


    const CardArtistRender = (data) => {
        return data.map(({ imgSrc, logoSrc, name }) => {
            return (
                <CardArtist
                    imgSrc={imgSrc}
                    logoSrc={logoSrc}
                    name={name} />
            )
        })
    }

    return (
        <section className='artists' id='artists'>
            <div className="small-title">
                <div className="small-content">
                    Popular <span className="colortext">Artists </span><br />
                    On This Week
                </div>
                {<Button text={"See All"} />}
            </div>
            <div className="artists-cards">
                <div className="artist-cards-block-a">
                    {
                        CardArtistRender(cardArtistsDataBlockA)
                    }
                </div>
                <div className="artist-cards-block-b">
                    {
                        CardArtistRender(cardArtistsDataBlockB)
                    }
                </div>
            </div>
        </section>
    );
};

export { Artists };