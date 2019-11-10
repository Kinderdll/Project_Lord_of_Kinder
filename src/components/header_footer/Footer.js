import React from 'react';
import Fade from 'react-reveal/Fade'
const Footer = () => {
    return (
        
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_rigtheous footer_logo_venue'>The Lord of the Rings
                    <div className='footer_copyright'>
                        2018_Project(by kinderdl)
                    </div>
                </div>
            </Fade>
        </footer>
        
    );
};

export default Footer;