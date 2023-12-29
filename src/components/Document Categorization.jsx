import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

export default function DocumentCategorization({ selectedCategory, onCategoryChange, index }) {

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        onCategoryChange(category, index);
    };

    const categoryOptions = [
        { value: '', label: 'Please classify uploaded document' },
        { value: 'Client Invoice', label: 'Client Invoice' },
        { value: 'Supplier Invoice', label: 'Supplier Invoice' },
        { value: 'CMR', label: 'CMR' },
        { value: 'Insurance', label: 'Insurance' },
        { value: 'Driver License', label: 'Driver License' },
    ];

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
                        {categoryOptions.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}>
                                {option.label}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label >
                            {selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice'
                                || selectedCategory === 'CMR'}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice' || selectedCategory === 'CMR'
                                ? 'Invoice Number'
                                : 'Company Name'}
                            style={{ borderRadius: '0', marginTop: '-23px' }}
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
