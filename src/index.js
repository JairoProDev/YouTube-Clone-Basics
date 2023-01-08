import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './ctx/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);


