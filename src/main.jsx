import { StrictMode } from 'react'
import { AuthProvider } from '../src/context/AuthContext.jsx';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import '../styles/style.scss'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
