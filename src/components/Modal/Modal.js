import './Modal.css';
import Form from "../Form/Form";
import React, {useState} from 'react';

const Modal = (props) =>{
    const {isModalOpen, selectedNote, toggleModal, editNote} = props;
    const [hasCursor, setHasCursor] = useState(false); // modal has cursor or not

    const handleCloseModal = () => !hasCursor && toggleModal(); // if modal does not have cursor, toggle modal
    const handleMouseOverModal = () => setHasCursor(true);
    const handleMouseOutModal = () => setHasCursor(false);

    return (
        <div className={`modal ${isModalOpen ? "open-modal":""}`} onClick={()=> handleCloseModal()}>
                <div className="modal-content" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal}>
                    <Form selectedNote={selectedNote} toggleModal={toggleModal} edit editNote={editNote} />
                </div>
            </div>
    )
}

export default Modal;