import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateFile = () => {
    const { id } = useParams()
    const [values, setValues] = useState({
        type: "",
        company: "",
        invoice: "",
        client: ""

    })
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get("http://localhost:3002/getrecord/" + id)
            .then(res => {
                const data = res.data[0];
                setValues(prevValues => ({
                    ...prevValues,
                    type: data.type || "", // default to empty string if null or undefined
                    company: data.company || "", // default to empty string if null or undefined
                    invoice: data.invoice || "", // default to empty string if null or undefined
                    client: data.client || "" // default to empty string if null or undefined
                }));
            })
            .catch(err => console.log(err));
    }, []);

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

        axios.put('http://localhost:3002/update/' + id, dataToSubmit)
            .then(res => navigate('/admin'))
            .catch(err => console.log(err))
    }
    return (
        <div>   return (
            <div className='d-flex align-items-center flex-column mt-3'>
                {/* <div className={'submitSave'} {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the files here ...</p> : <p>{props.description}</p>}
                </div> */}

                <form className="row g-3 needs-validation w-50 text-black" noValidate onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3-4">
                        <label htmlFor="validationCustom04" className="form-label">Uploaded Document</label>
                        <select
                            className="form-select"
                            id="validationCustom04"
                            required
                            value={values.type}
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
                            value={values.company}
                            onChange={(e) => setValues({ ...values, company: e.target.value })}
                            required />
                    </div>

                    <div className="mb-3 mt-3-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text"
                            className="form-control"
                            id="invoiceNumber"

                            name="invoice"
                            value={values.invoice}
                            onChange={(e) => setValues({ ...values, invoice: e.target.value })}
                            required />
                    </div>

                    <div className="mb-3 mt-3-4">
                        <label htmlFor="clientName" className="form-label">Full Name</label>
                        <input type="text"
                            className="form-control"
                            id="clientName"

                            name="client"
                            value={values.client}
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
                        >Update </button>
                    </div>
                </form></div>


            )
        </div>
    )
}

export default UpdateFile