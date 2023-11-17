import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function AboutUs(props) {
    return (
        <Container id='aboutUs'>
            <Row>
                <Col><img
                    src={props.img}
                    alt="Picture of hands"
                    width={500}
                    style={{ marginLeft: '60px' }} />
                </Col>
                <Col
                    style={{ color: 'black' }}>{props.text}
                    <Row> <Button
                        style={{
                            backgroundColor: 'rgb(65, 121, 133)',
                            border: 'rgb(65, 121, 133)',
                            marginTop: '90px',
                            width: '200px',
                            borderRadius: '0',
                        }}
                    >Read More</Button></Row>
                </Col>

            </Row>

        </Container>
    );
}