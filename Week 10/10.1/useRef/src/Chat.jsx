import { useState, useEffect, useRef } from "react";


function Chat(){
  const [messages, setMessages] = useState(["Hello! How are you"]);
  const chatBoxRef = useRef(null);

  // function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New Message!"]);
  }

  // scroll to bottom whenver new message is added 
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div
        ref={chatBoxRef}
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  )
}

export default Chat;
