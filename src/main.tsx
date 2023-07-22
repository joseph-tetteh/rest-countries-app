// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
// import { ApiProvider } from './context/ContextApi';
import { BrowserRouter as Routes } from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);