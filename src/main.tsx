import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { ApiProvider } from './context/ContextApi';
import { BrowserRouter as Router } from 'react-router-dom'; // Use 'Router' instead of 'Routes'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use 'Router' here instead of 'Routes' */}
      <ThemeProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
