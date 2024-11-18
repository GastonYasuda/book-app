// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <App />
  //</StrictMode>,
)