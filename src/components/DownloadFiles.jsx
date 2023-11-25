import React, { useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import doc from '../assets/doc.svg';
import pdf from '../assets/pdf.svg';
import DocumentCategorization from './Document Categorization.jsx';
import SubmitButton from './SubmitButton.jsx';

const Download = (props) => {
    const [files, setFiles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');    //categorize document. 

    const handleCategoryChange = (category, index) => {                 //categorize document. 
        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles[index].category = category;
            return updatedFiles;
        });
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
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] } });
    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    //submit info
    const handleSubmit = (sub) => {
        sub.preventDefault();        //prevent browser reload/refresh

        console.log('Form submitted!', files, selectedCategory);
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
                {files.length > 0 && <SubmitButton />}
            </form>

        </Container>

    );
};

export default Download;
