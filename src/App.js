import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';

const NOTES = [
  // {id: 'a123', text: 'some text1', title:'some title1'},
  // {id: 'a124', text: 'some text2', title:'some title2'},
  // {id: 'a125', text: 'some text3', title:'some title3'}

]

function App() {

  const [notes, setNotes] = useState(NOTES);
 
  const addNote = (note)=>{
    setNotes((prevNotes) =>{
      return [...notes, note]
    });
  };
  
  return (
    <div>
     <Navbar/>
     <Sidebar/>
     <Form addNote = {addNote}/>
     <Notes notes = {notes}/>
     <Modal/>
    </div>
  );
}

export default App;
