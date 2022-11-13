import React from "react";
import Modal from 'react-bootstrap/Modal';


export default function Popup({ handleDeleteTrue, handleDeleteFalse }) {
    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete?</p>
                <div className="float-end p-2">
                    <div className="btn btn-success m-1" onClick={handleDeleteTrue}>Yes</div>
                    <div className="btn btn-danger m-1" onClick={handleDeleteFalse}>No</div>
                </div>
            </Modal.Body>
        </Modal>
    )
}