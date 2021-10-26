import './App.scss';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import WebLayout from './components/layout/WebLayout';
import LoginSignup from './pages/LoginSignup';
import ProtectedRoutes from './components/ProtectedRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Switch>
        <ProtectedRoutes exact strict path="/login" component={LoginSignup} />
        <WebLayout>
          <ProtectedRoutes exact path="/" component={Home} />
          <ProtectedRoutes component={NotFound} />
        </WebLayout>
      </Switch>
    </>
  )
}

export default App;
