import React from 'react';
import { Container, Form } from 'react-bootstrap';

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

            {selectedCategory === 'Client Invoice' || selectedCategory === 'Supplier Invoice' || selectedCategory === 'CMR' ? (
                <Form.Group>
                    <Form.Label style={{ color: 'black', marginTop: '10px' }}>Enter Invoice Number:</Form.Label>
                    <Form.Control type="text" placeholder="Invoice Number" style={{ borderRadius: '0' }} maxLength={getMaxLength()} required />
                    <Form.Control.Feedback type="invalid">Please enter the Invoice Number.</Form.Control.Feedback>
                </Form.Group>
            ) : (
                <Form.Group>
                    <Form.Label style={{ color: 'black', marginTop: '10px' }}>Enter Company Name:</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" style={{ borderRadius: '0' }} maxLength={getMaxLength()} required />
                    <Form.Control.Feedback type="invalid">Please enter the Company Name.</Form.Control.Feedback>
                </Form.Group>
            )}
        </Container>
    );
}
