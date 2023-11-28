import React from 'react';
import { Button } from 'react-bootstrap';

const SaveButton = ({ onSave, isSubmitDisabled }) => {
    const handleSave = () => {
        // Call onSave if it's provided
        if (onSave) {
            onSave();
        }
    };

    return (
        <Button
            onClick={handleSave}
            style={{
                backgroundColor: 'rgb(65, 121, 133)',
                borderColor: 'rgb(65, 121, 133)',
                borderRadius: '0',
                marginTop: '10px',
            }}
            disabled={isSubmitDisabled}
        >
            Save
        </Button>
    );
};

export default SaveButton;
