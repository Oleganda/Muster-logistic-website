// FilePreviewItem.jsx
import React from 'react';
import { Image } from 'react-bootstrap';
import DeleteButton from './DeleteButton';
import DocumentCategorization from './Document Categorization';
import pdf from '../assets/pdf.svg';
import doc from '../assets/doc.svg';

const FilePreviewItem = ({ file, index, removeFile, handleCategoryChange, setFiles }) => {

    return (
        <div key={file.name}>
            {file.name.endsWith('.pdf') && (
                <Image
                    src={pdf}
                    alt="PDF File"
                    width={30}
                    height={30}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
            )}

            {file.name.endsWith('.docx' || '.doc') && (
                <Image
                    src={doc}
                    alt="DOC File"
                    width={30}
                    height={30}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
            )}
            <span style={{ color: 'black', margin: '5px' }}>{file.name}</span>
            <div style={{ display: 'inline-block' }}>
                <DeleteButton file={file} removeFile={removeFile} />
                <DocumentCategorization
                    selectedCategory={file.category}
                    onCategoryChange={(category) => handleCategoryChange(category, index)}
                    setFiles={setFiles}
                    index={index}
                />
            </div>
        </div>
    );
};

export default FilePreviewItem;
