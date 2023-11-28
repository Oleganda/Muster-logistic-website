import React, { useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import doc from '../assets/doc.svg';
import pdf from '../assets/pdf.svg';
import DocumentCategorization from './Document Categorization.jsx';
import SaveButton from './SaveButton';

//Download and Categorize documents
const Download = (props) => {
    const [files, setFiles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [showFileDetails, setShowFileDetails] = useState(false);

    //Show Button, when all documents are uploaded
    const showButtonAfterSubmit = () => {
        const isRequiredInfoPresent = files.every((file) => file.category && file.name);

        if (isRequiredInfoPresent) {
            setShowSaveButton(false);
        } else {
            setShowSaveButton(true);
        }
    };


    const handleCategoryChange = (category, index) => {
        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles[index].category = category;
            return updatedFiles;
        });
        setSelectedCategory(category);
        showButtonAfterSubmit();
    };

    //Drag and Drop function
    //Check if there are any files in dropon area. Prevents overwrite previous file 
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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept:
            { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }

    });

    //Remove files function    
    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name));
        showButtonAfterSubmit();
    }

    // //Submit Button function
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted!', files, selectedCategory);
    //     showButtonAfterSubmit();
    //     setShowFileDetails(true); // Set showFileDetails to true after submitting the form
    // };

    //Display submitted files after clicking Submit Button
    const displayFileDetails = () => {
        return files.map((file) => (
            <li key={file.name} style={{ color: 'black', listStyle: 'none' }}>
                Name: {file.name}
            </li>
        ));
    };

    const handleSubmitSave = (e) => {
        e.preventDefault();
        console.log('Form submitted!', files, selectedCategory);
        showButtonAfterSubmit();
        setShowFileDetails(true);

        // Save functionality here (modify as needed)
        files.forEach((file) => {
            const blob = new Blob([file], { type: file.type });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    };

    return (
        <Container>
            <form onSubmit={handleSubmitSave}>
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

                {/* Submit/Save Button */}
                <Button
                    type="submit"
                    onClick={() => setShowFileDetails(true)}
                    style={{
                        backgroundColor: 'rgb(65, 121, 133)',
                        borderColor: 'rgb(65, 121, 133)',
                        borderRadius: '0',
                        marginTop: '10px',
                    }}
                    disabled={!showSaveButton}
                >
                    Submit
                </Button>

            </form>
            {/* Display file details after the form is submitted */}
            {showFileDetails && (
                <section>
                    <ul>{displayFileDetails()}</ul>
                </section>
            )}

        </Container>

    );
};

export default Download;
