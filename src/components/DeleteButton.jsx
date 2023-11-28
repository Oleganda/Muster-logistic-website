import React from 'react';

const DeleteButton = ({ file, removeFile }) => {
    return (
        <button
            type="button"
            style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                cursor: 'pointer',
                marginTop: '10px',
                float: 'right',
            }}
            onClick={() => removeFile(file.name)}
        >
            Delete
        </button>
    );
};

export default DeleteButton;
