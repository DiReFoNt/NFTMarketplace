import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="contact-imgs">
                <img src="/img/contact/contact1.png" alt="woman pc future nft"  className='contact-img contact-down-img'/>
                <img src="/img/contact/contact2.png" alt="japan samurai cyber nft"  className='contact-img contact-up-img'/>

            </div>
            <div className="contact-submit">
                <div className="big-title" style={{ width: 520, fontSize: 48 }}>
                    Subscribe And <span className='colortext'>get our Updates </span>Every Week
                </div>
                <div className="big-subtitle" style={{ width: 520, height: 52 }}>
                    We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
                </div>
                <form className='contact-form'>
                    <input type="text" placeholder='Enter your e-mail'  className='contact-input'/>
                    <button type="submit" className='contact-input-button'>Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;