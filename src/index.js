import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const posts = [
    {id: 1, text: 'First post from Daniil!', likesCount: 25},
    {id: 2, text: 'My post!', likesCount: 12},
    {id: 3, text: 'Where are you from?', likesCount: 45},
    {id: 4, text: 'How are you?', likesCount: 11},
    {id: 5, text: 'Do you play football?', likesCount: 34},
    {id: 6, text: 'Hello world!', likesCount: 9},
];

const dialogs = [
    {id: 1, name: 'Daniil'},
    {id: 2, name: 'Sabina'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Nika'},
    {id: 5, name: 'Vitya'},
    {id: 6, name: 'Nika'},
    {id: 7, name: 'Kostya'},
];

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your DOK?'},
    {id: 3, message: 'Hello dude!'},
    {id: 4, message: 'My name John!'}
];

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
