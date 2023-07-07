import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

const Chatbot = () => {
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [userId, setUserId] = useState('');
    const server_port = 'http://localhost:8000/api/chat'; // change this to your server port
    useEffect(() => {
        const welcomeMessage = {
            text: 'Hi there! I am your Chat Assistant.',
            sender: 'bot',
            senderName: 'Chat Assistant',
            senderImage: '/img/logo.jpg',
        };
        setChatMessages([welcomeMessage]);

        const storedUserId = Cookies.get('userId'); // get the user ID from cookies
        if (storedUserId) { // if user ID is found in cookies
            setUserId(storedUserId);
            const storedMessages = Cookies.get(`chatMessages_${storedUserId}`);
            if (storedMessages) { // if chat messages are found in cookies
                setChatMessages(JSON.parse(storedMessages));
            }
        } else {
            const newUserId = generateUserId();
            setUserId(newUserId);
            Cookies.set('userId', newUserId);
            Cookies.remove('chatMessages');
        }
    }, []);

    useEffect(() => {
        Cookies.set(`chatMessages_${userId}`, JSON.stringify(chatMessages));
    }, [chatMessages, userId]);

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = {
                text: message,
                sender: 'user',
                senderName: 'User',
                senderImage: '/img/user.jpg',
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage('');

            sendMessageToServer(message, userId)
                .then((response) => {
                    const botResponse = {
                        text: response,
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, botResponse]);
                })
                .catch((error) => {
                    const errorMessage = {
                        text: "Hey "+ userId +'\n An error occurred. Please try again later.',
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
                });
        }
    };

    const handleChatClose = () => {
        setIsChatVisible(false);
    };

    const sendMessageToServer = (message, userId) => {
        return fetch(server_port , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, userId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((data) => {
                return data.response;
            });
    };

    const generateUserId = () => {
        // Generate a unique user ID (you can modify this logic as per your requirement)
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `user_${timestamp}_${random}`;
    };

    return (
        <div className="chatbot">
            {isChatVisible && (
                <div className="chatbot-container">
                    <div className="chat-header">
                        <h3>Chat Assistant</h3>
                        {/*     <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleChatClose} /> */}
                    </div>
                    <div className="chat-body">
                        {chatMessages.map((chatMessage, index) => (
                            <div key={index} className={`message ${chatMessage.sender === 'bot' ? 'bot' : 'user'}`}>
                                {chatMessage.sender === 'bot' && (
                                    <div className="sender-info">
                                        <img className="sender-image" src={chatMessage.senderImage} alt="Sender" />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                {chatMessage.sender === 'user' && (
                                    <div className="sender-info user-sender">
                                        <img className="sender-image" src={chatMessage.senderImage} alt="Sender" />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                <div className="message-content">{chatMessage.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleInputChange}
                        />
                        <FontAwesomeIcon icon={faPaperPlane} className="send-icon" onClick={handleSendMessage} />
                    </div>
                </div>
            )}
            <div className={`chatbot-button ${isChatVisible ? 'active' : ''}`} onClick={toggleChat}>
                {isChatVisible ? <FontAwesomeIcon icon={faTimes} className="close-icon" /> : <FontAwesomeIcon icon={faCommentAlt} />}
            </div>

        </div>
    );
};

export default Chatbot;