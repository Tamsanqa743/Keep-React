
import React, {useState} from 'react';
import './Form.css';

const Form = (props) =>{

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [isActive, setInactiveForm] = useState(false);

    const formClickHandler = () =>{
        console.log('form clicked on');
        setInactiveForm(true);
    }

    const titleChangeHandler = (event)=> setTitle(event.target.value);
    const textChangeHandler = (event) => setText(event.target.value);

    const submitFormHandler = (event)=>{
        event.preventDefault();
        setTitle("");
        setText("");
        const note = {
            id:"",
            title,
            text
        }
        props.addNote(note);
    }

    return (

        <div>
                
                
                    
                    <div className="form-container active-form" onClick={formClickHandler}>
                            <form onSubmit={submitFormHandler} className= {isActive ? "form": ""} id="form">
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

{/* <div className="form-container inactive-form" onClick={formClickHandler} >
<form>
    <input className="note-text" type="text" placeholder="Take a note..."/>
    <div className="form-actions">

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
</form>
</div> */}