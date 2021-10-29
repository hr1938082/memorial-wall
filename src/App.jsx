import './App.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import WebLayout from './components/layout/WebLayout';
import LoginSignup from './pages/LoginSignup';
import ProtectedRoutes from './components/ProtectedRoutes';
import NotFound from './pages/NotFound';

function App() {
  const history = useHistory();
  const IsAuthenticated = true;
  return (
    <>
      <Switch>
        <Route exact path="/login" component={() => IsAuthenticated ? history.goBack() : <LoginSignup />} />
        <WebLayout>
          <Switch>
            <ProtectedRoutes exact path="/" component={Home} />
            <ProtectedRoutes component={NotFound} />
          </Switch>
        </WebLayout>
      </Switch>
    </>
  )
}

export default App;
