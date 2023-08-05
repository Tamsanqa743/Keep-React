
import React, {useState} from 'react';
import { uid } from 'uid';
import './Form.css';

const Form = (props) =>{
    const {edit, selectedNote, toggleModal, editNote} = props;
    const [title, setTitle] = useState((edit && selectedNote.title) || "");
    const [text, setText] = useState((edit && selectedNote.text) || "");
    const [isActive, setActiveForm] = useState(edit);

    const formClickHandler = () =>{
        setActiveForm(true); // open active form
    }

    const titleChangeHandler = (event)=> setTitle(event.target.value);
    const textChangeHandler = (event) => {
        setText(event.target.value);
        setActiveForm(true);
    };

    const submitFormHandler = (event)=>{
        event.preventDefault();

        if(!edit){
            const note = {
                id:uid(),
                title,
                text
            }
            props.addNote(note);
            setActiveForm(false);  // close active form 
        }
        else{
            editNote({id:selectedNote.id, title, text} );
            toggleModal();
        }
        setTitle("");
        setText("");
    }

    return (

        <div>       
                    <div className="form-container active-form" onClick={formClickHandler}>
                            <form onSubmit={submitFormHandler} className= {isActive ? "form": ""}>
                                {isActive && <input id = "note-title" type="text"  value={title} className="note-title" placeholder="Title" onChange = {titleChangeHandler} />}

                                
                                <input id="note-text" className="note-text" value={text} type="text" placeholder="Take a note..." onChange={textChangeHandler}/>
                                {
                                    isActive ? (
                                        <div className="form-actions">
                                    <div className="icons">
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
                                        
                                        <div className="tootip">
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
                                    <button className="close-btn">Close</button>
                                </div>
                
                                    ): (<div className="form-actions">

                                        <div className="tootip">
                                            <span className="material-symbols-outlined hover">check_box</span>
                                            <span className="tooltip-text">New List</span>
                                        </div>
                                        <div className="tootip">
                                            <span className="material-symbols-outlined hover">brush</span>
                                            <span className="tooltip-text">New drawing</span>
                                        </div>
                                        <div className="tootip">
                                            <span className="material-symbols-outlined hover">image</span>
                                            <span className="tooltip-text">New note with image</span>
                                        </div>  
                                        </div>
                                        )
                                        }
                            </form>
                        </div>
                
            
            </div>
    )
}

export default Form;
