import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import React from "react";
import { deleteWarehouse } from "../../services/warehouses-api.js";
import { deleteItem } from "../../services/inventory-i-api";

function DeleteModal({ isOpen, closeModal, id, name, type }) {
    Modal.setAppElement("#root");

    async function deleteSelected() {
        if (type === "warehouse") {
            const result = await deleteWarehouse(id);
            if (result.status === 204) {
                closeModal(true);
            }
        } else if (type === "inventory") {
            const result = await deleteItem(id);
            if (result.status === 204) {
                closeModal(true);
        }
        closeModal();
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Delete Modal"
        >
            <div>
                <p>Are you sure you want to delete?</p>
                <div>
                    <button onClick={closeModal}>CANCEL</button>
                    <button onClick={deleteSelected} onBlur={closeModal}>DELETE</button>
                </div>
            </div>
        </Modal>
    )
};

export default DeleteModal;