import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

export default function DocumentCategorization({ selectedCategory, onCategoryChange, index }) {

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        onCategoryChange(category, index);
    };

    const getMaxLength = () => {
        switch (selectedCategory) {
            case 'Client Invoice':
            case 'Supplier Invoice':
            case 'CMR':
                return 15;
            case 'Insurance':
            case 'Driver License':
                return 10;
            default:
                return 5;
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Select

                        aria-label="Default select example"
                        style={{ borderRadius: '0' }}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >

                        <option value=''>Please classify uploaded document</option>
                        <option value='Client Invoice'>Client Invoice</option>
                        <option value='Supplier Invoice'>Supplier Invoice</option>
                        <option value='CMR'>CMR</option>
                        <option value='Insurance'>Insurance</option>
                        <option value='Driver License'>Driver License</option>
                    </Form.Select>
                </Col>

                <Col>
                    <Form.Group>
                        <Form.Label >
                            {selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice' || selectedCategory === 'CMR'}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice' || selectedCategory === 'CMR'
                                ? 'Invoice Number'
                                : 'Company Name'}
                            style={{ borderRadius: '0', marginTop: '-23px' }}
                            maxLength={getMaxLength()}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice' || selectedCategory === 'CMR'
                                ? 'Invoice Number'
                                : 'Company Name'}.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}
