import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './downloadFile.css';
import axios from 'axios';
import FileUploader from './FileUploader';

const Download = (props) => {

    const CreateFile = () => {
        const [values, setValues] = useState({
            type: "",
            company: "",
            invoice: "",
            client: "",
            name: ""

        })

        const [uploadedFiles, setUploadedFiles] = useState([]);

        const navigate = useNavigate()
        const handleSubmit = (e) => {
            e.preventDefault()
            // Validate and convert the invoice value to an integer
            const invoiceValue = parseInt(values.invoice, 10) || null;

            const dataToSubmit = {
                type: values.type,
                company: values.company,
                invoice: invoiceValue, // Convert to integer or set to null if not a valid integer
                client: values.client
            };

            //combine dataToSubmit with uploadedFiles before making the request
            const finalData = { ...dataToSubmit, files: uploadedFiles };

            axios.post('http://localhost:3002/files/upload', dataToSubmit)
                .then(res => navigate('/allfiles'))
                .catch(err => console.log(err))
        }
        const handleFileUpload = (files) => {
            setUploadedFiles(files);
        };
        return (
            <div className='d-flex align-items-center flex-column mt-3'>
                <form className="row g-3 needs-validation w-50 text-black" noValidate onSubmit={handleSubmit}>
                    <FileUploader onFileUpload={handleFileUpload}
                        onChange={(e) => setValues({ ...values, name: e.target.value })} />

                    <div className="mb-3 mt-3-4">

                        <select
                            className="form-select"
                            id="validationCustom04"
                            required
                            onChange={(e) => setValues({ ...values, type: e.target.value })}
                        >
                            <option value="">Select Document Type</option>
                            <option value="Client Invoice">Client Invoice</option>
                            <option value="Supplier Invoice">Supplier Invoice</option>
                            <option value="CMR">CMR</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Driver License">Driver License</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a type of the document.
                        </div>
                    </div>

                    <div className="mb-3 mt-3-4">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input type="text"
                            className="form-control"
                            id="companyName"

                            name="company"
                            onChange={(e) => setValues({ ...values, company: e.target.value })}
                            required />
                    </div>

                    <div className="mb-3 mt-3-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text"
                            className="form-control"
                            id="invoiceNumber"

                            name="invoice"
                            onChange={(e) => setValues({ ...values, invoice: e.target.value })}
                            required />
                    </div>

                    <div className="mb-3 mt-3-4">
                        <label htmlFor="clientName" className="form-label">Full Name</label>
                        <input type="text"
                            className="form-control"
                            id="clientName"

                            name="client"
                            onChange={(e) => setValues({ ...values, client: e.target.value })}
                            required />
                    </div>

                    <div className="mb-3 mt-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <button className="btn btn-primary" type="submit"
                            style={{
                                backgroundColor: 'rgb(65, 121, 133)',
                                borderColor: 'rgb(65, 121, 133)',
                                borderRadius: '0',
                                marginTop: '10px',
                            }}
                        >Submit form </button>
                    </div>
                </form></div>


        )
    }
    return (
        <Container>

            <CreateFile />
        </Container>
    );
};
export default Download;
