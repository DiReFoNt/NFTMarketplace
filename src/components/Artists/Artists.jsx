import React from 'react';
import Button from '../UI/button/Button';
import './Artists.css';


const Artists = () => {
    return (
        <div className='artists'>
            <div className="small-title">
                <div className="small-content">
                    Popular <span className="colortext">Artists </span><br></br>
                    On This Week
                </div>
                {<Button text={"See All"} />}
            </div>
            <div className="artists-cards">
                <div className="artist-cards-block-a">
                    <figure className="artists-img-card">
                        <img src="/img/artist/artist1/artist1.png" alt="" className="artists-img" />
                        <figcaption class="artists-card-title">
                            <img src="/img/artist/artist1/artist-logo.png" alt="" className='artist-logo-img' />
                            <div className='artist-logo'>
                                <div className='artist-logo-title'>Owner</div>
                                <div className='artist-logo-name'>Osvaldo Percy</div>
                            </div>
                        </figcaption>
                        <a href="#" class="artists-card-link"></a>
                    </figure>
                    <figure className="artists-img-card">
                        <img src="/img/artist/artist2/artist2.png" alt="" className="artists-img" />
                        <figcaption class="artists-card-title">
                            <img src="/img/artist/artist2/artist-logo2.png" alt="" className='artist-logo-img' />
                            <div className='artist-logo'>
                                <div className='artist-logo-title'>Owner</div>
                                <div className='artist-logo-name'>Ranson Sqiure</div>
                            </div>
                        </figcaption>
                        <a href="#" class="artists-card-link"></a>
                    </figure>
                    <figure className="artists-img-card">
                        <img src="/img/artist/artist4/artist4.png" alt="" className="artists-img" />
                        <figcaption class="artists-card-title">
                            <img src="/img/artist/artist3/artist-logo3.png" alt="" className='artist-logo-img' />
                            <div className='artist-logo'>
                                <div className='artist-logo-title'>Owner</div>
                                <div className='artist-logo-name'>Sebastian waltan</div>
                            </div>
                        </figcaption>
                        <a href="#" class="artists-card-link"></a>
                    </figure>
                    <figure className="artists-img-card">
                        <img src="/img/artist/artist5/artist5.png" alt="" className="artists-img" />
                        <figcaption class="artists-card-title">
                            <img src="/img/artist/artist5/artist-logo5.png" alt="" className='artist-logo-img' />
                            <div className='artist-logo'>
                                <div className='artist-logo-title'>Owner</div>
                                <div className='artist-logo-name'>Abraham Zack</div>
                            </div>
                        </figcaption>
                        <a href="#" class="artists-card-link"></a>
                    </figure>
                </div>
                <div className="artist-cards-block-b">
                    <figure className="artists-img-card">
                        <img src="/img/artist/artist3/artist3.png" alt="" className="artists-img " />
                        <figcaption class="artists-card-title">
                            <img src="/img/artist/artist4/artist-logo4.png" alt="" className='artist-logo-img' />
                            <div className='artist-logo'>
                                <div className='artist-logo-title'>Owner</div>
                                <div className='artist-logo-name'>Cristio leo</div>
                            </div>
                        </figcaption>
                        <a href="#" class="artists-card-link"></a>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Artists;