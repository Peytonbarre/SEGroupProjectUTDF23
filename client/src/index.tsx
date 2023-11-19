import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import { AuthProvider } from './util/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
