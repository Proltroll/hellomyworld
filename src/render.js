import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state, addPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App addPost={addPost} state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}