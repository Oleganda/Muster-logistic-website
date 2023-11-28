import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import Header from './Header';


export default function Services({ servicesData }) {

    const location = useLocation();

    const isServicesPage = location.pathname === '/about-us' || location.pathname === '/download' || location.pathname === '/admin';

    if (isServicesPage) {
        return null;
    }

    return (
        <Container id='ourServices'>
            <Header title='Our Services' />
            <Row>
                {servicesData.map((service, index) => (
                    <Col key={index} md={4}>
                        <Card style={{ width: '18rem', marginLeft: '60px', border: '0' }}>
                            <Card.Img variant="top" src={service.img} style={{ borderRadius: '0' }} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.text}</Card.Text>
                                <Button
                                    style={{
                                        backgroundColor: 'rgb(65, 121, 133)',
                                        border: 'rgb(65, 121, 133)',
                                        borderRadius: '0',
                                    }}
                                >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

