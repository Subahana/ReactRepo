import { useRef,useEffect } from 'react'
import ChatMessage from './Chatmessage';
import './ChatMessages.css';

function ChatMessages({chatMessage}){
    // const array = React.UseState([{ 
    //     message : "Hi Friend" ,
    //     sender : "user",
    //     id : 'id1'
    //   },{
    //     message : "Hi Friend,How can i help You" ,
    //     sender : "robot",
    //     id : 'id2'
    //   },{
    //     message : "I need to flip a coin", 
    //     sender : "user",
    //     id : 'id3'
    //   }]);

    // const chatMessage =array[0]; // first element in useState which is the currenet data
    // const setChatMessage = array[1]; // second element in useState which is a function used to update data

    // const chatmessage=[{ 
    //     message : "Hi Friend" ,
    //     sender : "user",
    //     id : 'id1'
    //   },{
    //     message : "Hi Friend,How can i help You" ,
    //     sender : "robot",
    //     id : 'id2'
    //   },{
    //     message : "I need to flip a coin", 
    //     sender : "user",
    //     id : 'id3'
    //   }];


    //   function sendMessage(){
    //     // chatmessage.push({
    //     //   message:'text',
    //     //   sender:'user',
    //     //   id: crypto.randomUUID() //used to create random id using js
    //     // });
    //     // console.log(chatmessage);
    //     setChatMessage(
    //       [
    //         ...chatMessage,
    //         {
    //           message:'text',
    //           sender:'user',
    //           id:crypto.randomUUID()
    //         }

    //       ]
    //     );
    //   }
    const chatMessageRef =useRef(null);
    useEffect(() =>{
    const containerElm = chatMessageRef.current
    if (containerElm){
    containerElm.scrollTop = containerElm.scrollHeight
    }
    },[chatMessage]);
    return (
    <div className ='chat-message-container'
    ref ={chatMessageRef}>
        {chatMessage.map((chatMessage) => {
        return (
            <ChatMessage 
            message = {chatMessage.message}
            sender ={chatMessage.sender}
            key = {chatMessage.id}
            />
        )
        })}
    </div>
    )
}

export default ChatMessages