import React from 'react';
import { Form } from 'react-bootstrap';

export default function DocumentCategorization({ selectedCategory, onCategoryChange, }) {

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        onCategoryChange(category);
    };

    return (
        <div>
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
            <p>Your selected file: {selectedCategory}</p>
        </div>
    );
}
