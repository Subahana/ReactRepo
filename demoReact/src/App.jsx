import { useState } from 'react'
import  ChatMessages  from './components/ChatMessages'
import  ChatInput from './components/ChatInput '
import './App.css'

function App(){
  const [chatMessage,setChatMessage] = useState(
    [
      { 
      message : "Hi Friend" ,
      sender : "user",
      id : 'id1'
    },{
      message : "Hi Friend,How can i help You" ,
      sender : "robot",
      id : 'id2'
    },{
      message : "I need to flip a coin", 
      sender : "user",
      id : 'id3'
    },{
      message : "It's a Head", 
      sender : "robot",
      id : 'id4'
    }
    ]
  )
  return (
    <div className ='app-container'>          

      <ChatMessages
        chatMessage ={chatMessage}
      />
      <ChatInput 
        chatMessage ={chatMessage}
        setChatMessage = {setChatMessage}
      />
    </div>
  )
}

export default App