import React, { useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import deleteFile from '../assets/delete.svg';
import doc from '../assets/doc.svg';
import pdf from '../assets/pdf.svg';





//Check if there are any files without overwrite previous file 
const Download = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        if (acceptedFiles.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }
    }, [])

    // Drag and Drop, Remove Button functions.
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] } });

    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    return (
        <Container>

            <form action="">
                <div {...getRootProps()} style={dropzoneStyles}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag and drop files, or click HERE to select files
                            <br />
                            (only .pdf and .docx files will be accepted)
                        </p>

                    )}
                </div>
                {/* Preview */}
                <ul>
                    {files.map((file) => (
                        <li key={file.name}>
                            {file.name.endsWith('.pdf') && (
                                <Image
                                    src={pdf}
                                    alt="PDF File"
                                    width={100}
                                    height={100}
                                    onLoad={() => {
                                        URL.revokeObjectURL(file.preview);
                                    }}
                                />
                            )}

                            {file.name.endsWith('.docx' || '.doc') && (
                                <Image
                                    src={doc}
                                    alt="DOC File"
                                    width={100}
                                    height={100}
                                    onLoad={() => {
                                        URL.revokeObjectURL(file.preview);
                                    }}
                                />
                            )}

                            <button type="button" onClick={() => removeFile(file.name)}>
                                <img src={deleteFile} alt="Truck picture" width={20} />
                            </button>
                            <p>{file.name}</p>
                        </li>
                    ))}
                </ul>

            </form>
        </Container>
    );
};

const dropzoneStyles = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default Download;
