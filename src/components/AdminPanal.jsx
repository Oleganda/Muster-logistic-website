// components/AdminPanel.jsx
import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const AdminPanel = ({ files, deleteFile, renameFile }) => {
    const [newName, setNewName] = useState('');

    const handleRename = (index) => {
        renameFile(index, newName);
        setNewName('');
    };

    return (
        <Container>
            <h2>Admin Panel</h2>

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
                                <Button variant="danger" onClick={() => deleteFile(index)}>
                                    Delete
                                </Button>
                                <input
                                    type="text"
                                    placeholder="New Name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <Button variant="info" onClick={() => handleRename(index)}>
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
