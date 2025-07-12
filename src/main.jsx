import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './global.css';
import App from './App.jsx'

console.log('Main.jsx loaded successfully');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Root element not found!');
}
