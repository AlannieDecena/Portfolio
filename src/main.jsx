// Importing the necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Rendering the application to the root element in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(

  // Enabling strict mode for React
  <React.StrictMode>
    <BrowserRouter>
 
        <App />

    </BrowserRouter>
  </React.StrictMode>
);
// Providing routing functionality to the application
//<BrowserRouter>


  // Rendering the main application component
  //<App />