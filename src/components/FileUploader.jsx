import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Document, Page } from 'react-pdf';

const FileUploader = ({ onFileUpload }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the dropped files
        onFileUpload(acceptedFiles);
        console.log(acceptedFiles);
    }, [onFileUpload]);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

const dropzoneStyles = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default FileUploader;
