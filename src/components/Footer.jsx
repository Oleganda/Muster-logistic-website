import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <>
            <Nav className="justify-content-center border=warning mt-5" activeKey="/home" style={{ backgroundColor: 'rgb(41, 48, 48)' }}>

                <Nav.Item >
                    <Nav.Link href="/home" style={{ color: 'white' }}>About Us</Nav.Link >
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" style={{ color: 'white' }}>Our Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={{ color: 'white' }}>Jobs</Nav.Link>
                </Nav.Item>

            </Nav>
            <p className="text-center mt-4 mb-4 " style={{ color: 'black' }}>All Rights Reserved. Copyright © 2022 </p>

        </>
    );
}

