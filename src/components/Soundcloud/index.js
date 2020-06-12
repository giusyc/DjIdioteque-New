import React from 'react';
import Iframe from 'react-iframe';

const Soundcloud = () => {
    return (
        <div className="wrapper">
            <div className="content">
            <h2>Music</h2>
                <Iframe 
                width="100%" 
                height="300" 
                scrolling="no" 
                frameborder="yes" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/273198687&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        >
                </Iframe>

                </div>               
            </div>

        
    );
};

export default Soundcloud;