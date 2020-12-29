import { useState } from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import useAxiosGet from '../Hooks/useAxiosGet.js';
import AxiosPost from '../Requests/AxiosPost.js';

const breadcrumbPath = [
  { to: '/', name: 'Home' },
  { to: null, name: 'Chat' },
];

function Chat() {
  const messagesFromServer = useAxiosGet('messages');
  // internal state
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  // internal events
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const addNewMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      username: username,
      message: message,
      createdAt: new Date(),
    };

    AxiosPost('messages', { username, message });

    const updatedMessages = [newMessage, ...messages];

    setMessages(updatedMessages);
    setMessage('');
  };

  const combindedMessages = [...messages, ...(messagesFromServer.data || [])];

  const messagesElements = combindedMessages.map((message) => {
    const createdAt = new Date(message.createdAt);
    const formattedDate =
      createdAt.getDate() +
      '.' +
      (parseFloat(createdAt.getMonth()) + 1) +
      '.' +
      createdAt.getFullYear() +
      ' ' +
      createdAt.getHours() +
      ':' +
      createdAt.getMinutes();

    return (
      <li className="media chat-message">
        <div className="media-body">
          <h5 className="mt-0 mb-1">
            {message.username}
            <span className="chat-message-timestamp">{formattedDate}</span>
          </h5>
          {message.message}
        </div>
      </li>
    );
  });

  return (
    <div>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      <div className="container-fluid wrap">
        <h3 className="chat-title">Chat</h3>
        <ul id="message-box" className="list-unstyled">
          {messagesElements}
        </ul>

        <form id="chat-form">
          <div className="row">
            <div className="col-3" id="username-form">
              <div className="form-group mx-sm-3 mb-2">
                <div>
                  <label for="username">Username:</label>
                </div>
                <input id="username" value={username} onChange={handleUsernameChange} className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-11">
              <div className="form-group mx-sm-3 mb-2">
                <div>
                  <label for="message">Message:</label>
                </div>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-1">
              <br />
              <br />
              <button
                onClick={addNewMessage}
                type="button submit"
                className="btn btn-outline-dark float-left"
                value="Send"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
