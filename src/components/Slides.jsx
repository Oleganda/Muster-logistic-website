import React from 'react';

export default function InfoSlides({ imageSrc }) {
    return (
        <div className='center'>
            <img className='img-banner' src={imageSrc} alt="Truck Image" />
        </div>
    );
}
