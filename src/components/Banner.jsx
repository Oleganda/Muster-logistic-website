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
                <InfoSlides imageSrc="https://img.freepik.com/free-photo/logistics-and-transportation-of-container-cargo-ship-and-cargo-plane-with-working-crane-bridge-in-shipyard-at-sunrise-logistic-import-export-and-transport-industry-background-ai-generative_123827-24177.jpg?w=1480&t=st=1707896894~exp=1707897494~hmac=9c0589871a65531315a420f3f99aba011e9345a60d42e2b3334e5c80ca3d6bd4" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>SHIPMENT AND LOGISTICS</h1>
                        <h2>Providing Customers Solutions For Individuals and Shipments Needs</h2>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides imageSrc="https://img.freepik.com/free-photo/trucks-on-highway-in-mountain-at-sunset_181624-61739.jpg?w=1480&t=st=1707896926~exp=1707897526~hmac=df8958997b8aa7fccb905a0738064619de6cd2ae840d7d417edb5a6c4e67147e" />
                <Carousel.Caption>
                    <div className='background'>
                        <h1>DELIVER EVERYWHERE</h1>
                        <h2>We deliver to 32 countries</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <InfoSlides imageSrc="https://img.freepik.com/free-photo/young-man-working-at-a-warehouse-with-boxes_1303-16617.jpg?w=1480&t=st=1707896975~exp=1707897575~hmac=c4d6b2fbaf8f8665438f5c52e7f53bf86b8a6e2f08399b8898607feb1217e776" />
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
