import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.536940297055!2d21.765124000108255!3d39.55297404662315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13591ed719fb4df3%3A0x83af895d3e9c4978!2zzprOv8-Fz4HPg86_z43OvCDOpM62zrHOvM6v!5e0!3m2!1sel!2sgr!4v1533124711925" 
                width="100%"
                height="500px" 
                frameBorder="0"
                border="0"
                allowFullScreen
                title='Way to Mordor'>
            </iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;