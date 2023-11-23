import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from 'react-router-dom';

export default function Questions() {
    const location = useLocation();

    const isFaq = location.pathname === '/about-us' || location.pathname === '/download';

    if (isFaq) {
        return null;
    }

    return (
        <Container >
            <Accordion defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is route optimization?</Accordion.Header>
                    <Accordion.Body >
                        Route optimization is the process of calculating the most cost-efficient route to reach a destination. It merges factors like the number of orders, multi-stops, traffic congestion, selection of the nearest drivers, location, etc., improving the speed of delivery and reduction in the carbon footprint.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How is ETA calculated? </Accordion.Header>
                    <Accordion.Body>
                        ETA stands for estimated time for arrival. ETA is calculated based on a) Time to load orders in a trip and b) Travel time to reach the customer’s location.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is a DRS (delivery run sheet)?  </Accordion.Header>
                    <Accordion.Body>
                        A delivery run sheet is a backup for proof of delivery. A courier/ delivery person will carry a receipt of delivery acceptance, wherein the customer has to sign/ provide name/ mobile number on receiving the order, which acts as proof of delivery.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is inventory tracking?  </Accordion.Header>
                    <Accordion.Body>
                        Inventory tracking is a process wherein you can track items from multiple warehouses, stores, and fulfillment centers. This is essential to meet customer demand and restock items in relevant locations.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

