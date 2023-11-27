import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ handleSubmit, isSubmitDisabled, onClick, showFileDetails }) => {
    const handleClick = () => {
        // Call showFileDetails to set showFileDetails to true
        showFileDetails();
        // Call onClick if it's provided
        if (onClick) {
            onClick();
        }
    };

    return (
        <>
            <Button
                type="submit"
                onClick={handleClick}
                style={{
                    backgroundColor: 'rgb(65, 121, 133)',
                    borderColor: 'rgb(65, 121, 133)',
                    borderRadius: '0',
                    marginTop: '10px',
                }}
                disabled={isSubmitDisabled}
            >
                Submit
            </Button>
        </>
    );
};

export default SubmitButton;
