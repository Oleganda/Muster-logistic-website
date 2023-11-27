import React, { useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import doc from '../assets/doc.svg';
import pdf from '../assets/pdf.svg';
import DocumentCategorization from './Document Categorization.jsx';
import SubmitButton from './SubmitButton.jsx';

//Download and Categorize documents
const Download = (props) => {
    const [files, setFiles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSaveButton, setShowSaveButton] = useState('');


    const handleCategoryChange = (category, index) => {
        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles[index].category = category;
            return updatedFiles;
        });
        showButtonAfterSubmit();
    };


    //Check if there are any files without overwriting previous file 
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        if (acceptedFiles.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
            showButtonAfterSubmit();
        }
    }, [])

    //Drag and Drop function
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept:
            { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }

    });

    //Remove files function    
    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name));
        showButtonAfterSubmit();
    }

    //Submit button functiom 
    const handleSubmit = (e) => {
        e.preventDefault();        //prevent browser reload/refresh
        console.log('Form submitted!', files, selectedCategory);
        showButtonAfterSubmit();
    }

    //Show Button, when all documents are saved 

    const showButtonAfterSubmit = () => {
        if (files) {
            const isAllDataDownloaded = files.every((file) => file.category && file.name);
            setShowSaveButton(isAllDataDownloaded);
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div {...getRootProps()}
                    style=
                    {{
                        border: '2px dashed #cccccc',
                        borderRadius: '4px',
                        padding: '10px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '10px'
                    }}>
                    <input {...getInputProps()} />
                    {isDragActive ? (<p>Drop the files here ...</p>) : (<p>{props.description}</p>)}
                </div>

                {/* Preview of files */}

                <div style={{ display: 'flex' }}>
                    <div>
                        {files.map((file, index) => (
                            <div key={file.name}>
                                {file.name.endsWith('.pdf') && (
                                    <Image
                                        src={pdf}
                                        alt="PDF File"
                                        width={50}
                                        height={50}
                                        onLoad={() => {
                                            URL.revokeObjectURL(file.preview);
                                        }}
                                    />
                                )}

                                {file.name.endsWith('.docx' || '.doc') && (
                                    <Image
                                        src={doc}
                                        alt="DOC File"
                                        width={50}
                                        height={50}
                                        onLoad={() => {
                                            URL.revokeObjectURL(file.preview);
                                        }}
                                    />
                                )}
                                <span style={{
                                    color: 'black',
                                    margin: '20px'
                                }}>{file.name}</span>

                                <button type="button"
                                    style={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #ccc',
                                        cursor: 'pointer',
                                        marginTop: '10px',
                                        float: 'right'
                                    }}
                                    onClick={() => removeFile(file.name)}>Delete
                                </button>

                                <DocumentCategorization
                                    selectedCategory={file.category}
                                    onCategoryChange={(category) =>
                                        handleCategoryChange(category, index)
                                    }
                                    setFiles={setFiles}
                                    index={index}// pass setFiles function
                                />

                            </div>
                        ))}
                    </div>
                </div>



                {showSaveButton && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button type="button" onClick={handleSubmit}

                            style={{
                                backgroundColor: 'green',
                                borderColor: 'green',
                                borderRadius: '0',
                                marginTop: '10px',
                                display: 'none',
                            }}>
                            Submit
                        </Button>
                    </div>
                )}
                <Button type="submit" disabled={!showSaveButton}

                    style={{
                        backgroundColor: 'rgb(65, 121, 133)',
                        borderColor: 'rgb(65, 121, 133)',
                        borderRadius: '0',
                        marginTop: '10px'
                    }}>
                    Submit
                </Button>
            </form>

        </Container>

    );
};

export default Download;
