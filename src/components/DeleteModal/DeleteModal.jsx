import Modal from "react-modal";
import React from "react";
import { deleteWarehouse } from "../../services/warehouses-api.js";
import { deleteItem } from "../../services/inventory-i-api";
import "./DeleteModal.scss";

function DeleteModal({ isOpen, closeModal, id, type }) {
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
            className="modal-container"
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Delete Modal"
        >
            <div className="modal">
                <h2 className="modal__paragraph">Are you sure you want to delete this {type === "warehouse" ? "warehouse" : "inventory item"}?</h2>
                <div className="modal__buttons">
                    <button className="modal__button" onClick={closeModal}>CANCEL</button>
                    <button className="modal__button" onClick={deleteSelected} onBlur={closeModal}>DELETE</button>
                </div>
            </div>
        </Modal>
    )
};

export default DeleteModal;