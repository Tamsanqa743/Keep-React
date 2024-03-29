import './Notes.css';
import React, {useState} from 'react';

const Note = (props) =>{
    // const text = props.text;
    const {toggleModal, note, setSelectedNote, deleteNote} = props;
    const [isHover, setIsHover] = useState(false);

    const noteClickHandler = () =>{
        toggleModal();
        setSelectedNote(note); // handles note clicks na dtoggles modal
    }

    const mouseOutHandler = () =>{
        setIsHover(false);
    }

    const hoverOverhandler = ()=>{
        setIsHover(true);
    }

    const deleteHandler = () =>{
        deleteNote(note.id);
    }
    return (
        <div className="notes" >
        <div className="note" id= {note.id} 
        onMouseOver={hoverOverhandler}
        onMouseOut={mouseOutHandler}
        onClick={noteClickHandler}
        >
            
            <span className="material-icons check-circle" style={{visibility: isHover ? "visible": "hidden"}} >check_circle</span>
           
            <div className="title">{note.title}</div>
            <div className="text">{note.text}</div>
            
                <div className="note-footer" style={{visibility: isHover ? "visible": "hidden"}}>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">add_alert</span>
                    <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">person_add</span>
                    <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">palette</span>
                    <span className="tooltip-text">Background options</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">check_box</span>
                    <span className="tooltip-text">New List</span>
                </div>
                  
                <div className="tootip archive" onClick={deleteHandler}>
                    <span className="material-symbols-outlined hover small-icon">archive</span>
                    <span className="tooltip-text">Archive</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">more_vert</span>
                    <span className="tooltip-text">More</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">undo</span>
                    <span className="tooltip-text">Undo</span>
                </div>
                <div className="tootip">
                    <span className="material-symbols-outlined hover small-icon">redo</span>
                    <span className="tooltip-text">Redo</span>
                </div>
            </div>

            </div>    
        
        <div/>

        </div>
    )
}

export default Note;