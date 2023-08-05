import Note from './Note';
import react, {useState} from 'react';

const Notes = (props) =>{
    const {notes, deleteNote, toggleModal, setSelectedNote, selectedNote} = props;

    return (
        <div className='notes' >
            
            {
                notes.length === 0 ? (<p>Notes you add appear here</p>): (
                notes.map((note, index) => <Note  key ={index} note={note} notes={notes} deleteNote = {deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote} />
            ))
            }
        </div>
    )

}
export default Notes;