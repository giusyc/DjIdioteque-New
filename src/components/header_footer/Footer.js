import React from 'react';
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="bck_black">
        <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Idioteque</div>
        <div className="footer_copyright">
        Idioteque 2020. All rights reserved.    
        </div>
        <div className="social_media">
            <SocialIcon url="https://www.facebook.com/Idiotequeuk/" network="facebook" fgColor="#FFFFFF" />
            <SocialIcon url="https://www.instagram.com/idioteque__uk" network="instagram" bgColor="#000000" fgColor="#DC143C" />
        </div>
        
        
        
        </Fade>
            
        </footer>
    );
};

export default Footer;