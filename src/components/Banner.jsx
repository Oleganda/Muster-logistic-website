import Carousel from 'react-bootstrap/Carousel';
import InfoSlides from './Slides.jsx';
import { useLocation } from 'react-router-dom';

export default function MainBanner() {
    const location = useLocation();

    const isAboutUsPage = location.pathname === '/about-us' || location.pathname === '/files/upload' || location.pathname === '/admin';

    if (isAboutUsPage) {
        return null;
    }


    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <InfoSlides imageSrc="https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573_1280.jpg" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>SHIPMENT AND LOGISTICS</h1>
                        <h2>Providing Customers Solutions For Individuals and Shipments Needs</h2>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides imageSrc="https://cdn.pixabay.com/photo/2017/08/24/16/07/truck-2677373_1280.jpg" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>DELIVER EVERYWHERE</h1>
                        <h2>We deliver to 32 countries</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides imageSrc="https://cdn.pixabay.com/photo/2018/05/14/20/54/truck-3401529_1280.jpg" />
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
