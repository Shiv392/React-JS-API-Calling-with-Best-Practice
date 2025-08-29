import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthRoute from './features/authentication/authentication_route';
import Common_notification from './features/shared/common_components/notification/common_notification';

function App() {

  return (
    <BrowserRouter>
    <AuthRoute />
    <Common_notification />
    </BrowserRouter>
  )
}

export default App
