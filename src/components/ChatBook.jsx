import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatWindow from './ChatWindow.jsx';
import '../Styles/chat-book.css';

const chats = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const ChatPage = () => {
    return (
        <Router>
            <div className="chat-list">
                <div>
                    <h3>Select a chat:</h3>
                    <ul className='slide-bar-ul'>
                        {chats.map((chat) => (
                            <li key={chat.id}>
                                <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Routes>
                    <Route path="/chat/:id" element={<ChatWindow />} />
                </Routes>
            </div>
        </Router>
    );
};

export default ChatPage;
