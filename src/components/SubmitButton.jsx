import React from 'react';
import { Button } from 'react-bootstrap';

export default function SubmitButton() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button type='submit'
                style={{
                    backgroundColor: 'rgb(65, 121, 133)',
                    borderColor: 'rgb(65, 121, 133)',
                    borderRadius: '0',
                }}>
                Submit
            </Button>
        </div>
    );
}
