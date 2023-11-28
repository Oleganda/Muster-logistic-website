// components/AdminPanel.jsx
import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const AdminPanel = ({ files, deleteFile, renameFile }) => {
    const [newName, setNewName] = useState('');

    const handleRename = (index) => {
        console.log('Renaming file at index', index);
        renameFile(index, newName);
        setNewName('');
    };

    return (
        <Container>
            <h1 style={{ color: 'black', textAlign: 'center', margin: '20px' }}>Admin Panel</h1>

            {/* Display list of uploaded files */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>File Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{file.name}</td>
                            <td>
                                <Button style={{
                                    backgroundColor: 'rgb(65, 121, 133)',
                                    borderColor: 'rgb(65, 121, 133)',
                                    borderRadius: '0',
                                    marginTop: '10px',
                                }} onClick={() => deleteFile(index)}>
                                    Delete
                                </Button>
                                <input
                                    type="text"
                                    placeholder="New Name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <Button style={{
                                    backgroundColor: 'rgb(65, 121, 133)',
                                    borderColor: 'rgb(65, 121, 133)',
                                    borderRadius: '0',
                                    marginTop: '10px',
                                }} onClick={() => handleRename(index)}>
                                    Rename
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminPanel;
