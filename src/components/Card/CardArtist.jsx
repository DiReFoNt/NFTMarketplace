import React from 'react';
import '../../styles/CardArtist.css';


const CardArtist = ({imgSrc, logoSrc, name}) => {
    return (
        <figure className="artists-img-card">
            <img src={imgSrc} alt="artist logo" className="artists-img " />
            <figcaption class="artists-card-title">
                <img src={logoSrc} alt="artist popular nft" className='artist-logo-img' />
                <div className='artist-logo'>
                    <div className='artist-logo-title'>Owner</div>
                    <div className='artist-logo-name'>{name}</div>
                </div>
            </figcaption>
            <a href="#" class="artists-card-link"></a>
        </figure>
    //     <figure className="artists-img-card">
    //     <img src="/img/artist/artist3/artist3.png" alt="artist logo" className="artists-img " />
    //     <figcaption class="artists-card-title">
    //         <img src="/img/artist/artist4/artist-logo4.png" alt="artist popular nft" className='artist-logo-img' />
    //         <div className='artist-logo'>
    //             <div className='artist-logo-title'>Owner</div>
    //             <div className='artist-logo-name'>Cristio leo</div>
    //         </div>
    //     </figcaption>
    //     <a href="#" class="artists-card-link"></a>
    // </figure>
    );
};

export { CardArtist };