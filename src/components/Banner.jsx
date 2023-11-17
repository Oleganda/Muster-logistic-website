import Carousel from 'react-bootstrap/Carousel';
import InfoSlides from './Slides.jsx';

export default function MainBanner() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <InfoSlides text="First slide" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>SHIPMENT AND LOGISTICS</h1>
                        <h2>Providing Customers Solutions For Individuals and Shipments Needs</h2>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides text="Second slide" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>DELIVER EVERYWHERE</h1>
                        <h2>We deliver to 32 countries</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides text="Third slide" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>FASTLY GROWING TRUCK FLEET</h1>
                        <h2>We have big international team</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
