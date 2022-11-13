import React from "react";
import Modal from 'react-bootstrap/Modal';


export default function Popup({ viewData, handleClose }) {
    return (
        <Modal
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title><strong>Employee Detail of:</strong> <br /> {viewData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID:</strong> {viewData.id}</p>
                <p><strong>Name:</strong> {viewData.name}</p>
                <p><strong>Address:</strong> {viewData.address}</p>
                <p><strong>D.O.B.:</strong> {viewData.dob}</p>
                <p><strong>Gender: </strong>{viewData.gender}</p>
                <p><strong>Email: </strong>{viewData.email}</p>
                <p><strong>Phone No.: </strong>{viewData.phone}</p>
            </Modal.Body>
        </Modal>
    )
}