// jshint esversion:6
import React, { useEffect, useState } from 'react';
import { FormControl, Input, IconButton } from '@mui/material';
import './App.css';

import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
// import IconButton from '@mui/material';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] ) //condition

  const sendMessage = (event) => {
    event.preventDefault();
    // all my logic conditions happens here
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
    <img src="./fbLogo.png" alt="fb-messengerLog" />
     <h1>NotesMuNotes Messenger</h1>
     <h2>Welcome {username}</h2>

     <form className='app__form'>
      <FormControl className='app__formControl'>
        <Input className='app__input' placeholder='Input a message ...' value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
     </form>

     <FlipMove>
        {
          // this actually maps every single item in the ideas
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
     </FlipMove>

    </div>
  );
}

export default App;
