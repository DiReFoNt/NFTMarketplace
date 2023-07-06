import React from 'react';
import './Marketplace.css';
import Button from '../UI/button/Button';
import Card from '../Card/Card';

const Marketplace = () => {
    return (
        <section className='marketplace' id='marketplace'>
            <div className="small-title">
                <div className="small-content">
                    <span className="colortext">
                        Amazing
                    </span> and Super
                    Unique Art of This
                    <span className="colortext">
                        {' '}Week
                    </span>
                </div>
                {<Button text={"See All"} />}
            </div>
            <div className="marketplace-cards">
                {<Card name={'Cyberpunk Cocomo'}
                    price={490}
                    deadline={"Jule, 30 , 2023"}
                    src={'/img/marketplace/card-cyber.png'} />}

                {<Card name={'Charge, Qi tiao yu'}
                    price={520}
                    deadline={"Jule, 26 , 2023"}
                    src={'/img/marketplace/card-charge.png'} />}
                {<Card name={'Surgeon, Josh Rife'}
                    price={380}
                    deadline={"Jule, 10 , 2023"}
                    src={'/img/marketplace/card-surgeon.png'} />}
            </div>
        </section>
    );
};

export default Marketplace;