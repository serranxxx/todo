import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import { TodoApp } from './TodoApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
);


