import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

function ChatInput({chatMessage,setChatMessage}){
    const [inputText ,setInputText] = useState('');
    function saveInputText(event){
        setInputText(event.target.value)
    }
    function sendMessage(){
        const newChatMessages =[
            ...chatMessage,
            {
            message:inputText,
            sender:'user',
            id:crypto.randomUUID()
            }
        ];
        setChatMessage(newChatMessages);
        const response = Chatbot.getResponse(inputText);
        setChatMessage(
        [
            ...newChatMessages,
            {
            message:response,
            sender:'robot',
            id:crypto.randomUUID()
            }

        ]
        );
        setInputText('');
    }
    return(
        <div className = 'chat-input-container'>
        <input
            placeholder ='Create a Chat'
            size ='30'
            onChange ={saveInputText}
            value = {inputText}  // Controlled Input :it use value prop to control the text 
            className = 'chat-input'
        />
        <button
            onClick={sendMessage}
            className='send-button'
        >
            Send
        </button>
        </div>
    );
    }

export default ChatInput