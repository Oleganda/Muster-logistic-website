import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Files = () => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3002")
            .then(res => setFiles(res.data))
            .catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        axios.delete('http://localhost:3002/delete/' + id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    return (

        <div className='container mt-5'>
            <h1>All Files</h1>
            {files.length !== 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Type</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Invoice Number</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map(file =>
                            <tr key={file.id}>
                                <td>{file.id}</td>
                                <td>{file.type}</td>
                                <td>{file.company}</td>
                                <td>{file.invoice}</td>
                                <td>{file.client}</td>
                                <td ><Link to={`/update/${file.id}`} type='button'
                                    style={{
                                        backgroundColor: 'rgb(65, 121, 133)',
                                        borderColor: 'rgb(65, 121, 133)',
                                        borderRadius: '0',
                                        marginTop: '10px',
                                        marginRight: '10px',
                                        color: 'white',
                                        textDecoration: 'none',
                                        padding: '3px'
                                    }}>Update</Link>
                                    <button type='button'
                                        onClick={() => handleDelete(file.id)}
                                        style={{
                                            backgroundColor: 'rgb(65, 121, 133)',
                                            borderColor: 'rgb(65, 121, 133)',
                                            borderRadius: '0',
                                            marginTop: '10px',
                                            color: 'white'
                                        }}>Delete</button></td>
                            </tr>

                        )
                        }
                    </tbody>
                </table>
                : <h2 className='container'>No files</h2>
            }
            <Link to="/files/upload" className='btn btn-success' style={{
                backgroundColor: 'rgb(65, 121, 133)',
                borderColor: 'rgb(65, 121, 133)',
                borderRadius: '0',
                marginTop: '10px',
            }}> Upload File</Link>
        </div>
    )
}

export default Files