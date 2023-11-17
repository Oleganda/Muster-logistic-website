import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import arrow from '../assets/arrow.png';

export default function UpButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            href="/#navbar"
            style={{
                backgroundColor: 'white',
                borderRadius: '0',
                display: showButton ? 'flex' : 'none',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000,
            }}
            onClick={handleClick}
        >
            <img src={arrow} width={30} alt="Arrow Up" />
        </Button>
    );
}
