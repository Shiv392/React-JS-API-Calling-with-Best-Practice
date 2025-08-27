import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthRoute from './features/authentication/authentication_route';

function App() {

  return (
    <BrowserRouter>
    <AuthRoute />
    </BrowserRouter>
  )
}

export default App
