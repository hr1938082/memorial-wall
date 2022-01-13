import './App.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import WebLayout from './components/layout/WebLayout';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Memorialize from './pages/Memorialize';
import NotFound from './pages/NotFound';
import SketchBoard from './pages/SketchBoard';
import useUserData from './Hooks/useUserData';
import { UserContext } from './Context/UserContext'
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <UserContext.Provider value={useUserData()}>
      <Switch>
        <Route exact path="/login" component={LoginSignup} />
        <WebLayout>
          <Switch>
            <ProtectedRoutes exact path="/" component={Home} />
            <ProtectedRoutes exact path="/memorialize" component={Memorialize} />
            <ProtectedRoutes exact path="/sketchboard" component={SketchBoard} />
            <ProtectedRoutes exact path="/profile" component={UserProfile} />
            <ProtectedRoutes component={NotFound} />
          </Switch>
        </WebLayout>
      </Switch>
    </UserContext.Provider>
  )
}

export default App;
