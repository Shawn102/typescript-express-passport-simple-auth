import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyAppProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyAppProvider>
    <App />
    </MyAppProvider>
  </React.StrictMode>
);


