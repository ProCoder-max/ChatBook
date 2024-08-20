import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const initialChats = [
    { id: 1, name: 'Alice', messages: [{ text: 'Hi!', isOwnMessage: false }, { text: 'How are you?', isOwnMessage: true }] },
    { id: 2, name: 'Bob', messages: [{ text: 'Hello!', isOwnMessage: false }, { text: 'What’s up?', isOwnMessage: true }] },
    { id: 3, name: 'Charlie', messages: [{ text: 'Hey!', isOwnMessage: false }, { text: 'Long time no see.', isOwnMessage: true }] }
];

const ChatWindow = () => {
    const { id } = useParams();
    const chatId = parseInt(id);
    const chat = initialChats.find((chat) => chat.id === chatId);
    
    const [messages, setMessages] = useState(chat.messages);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = (isOwnMessage) => {
        const newMessage = { text: inputValue, isOwnMessage };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    return (
        <div className="chat-window">
            <h2>Chat with {chat.name}</h2>
                <ul>
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={message.isOwnMessage ? 'own-message' : 'other-message'}
                        >
                            <span>{message.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="chat-input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        />
                    <button onClick={() => handleSendMessage(true)}>Send as You</button>
                    <button onClick={() => handleSendMessage(false)}>Send as {chat.name}</button>
                </div>
        </div>
    );
};

export default ChatWindow;
