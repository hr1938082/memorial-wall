import './App.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import WebLayout from './components/layout/WebLayout';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Memorialize from './pages/Memorialize';
import NotFound from './pages/NotFound';
import SketchBoard from './pages/SketchBoard';

function App() {
  const history = useHistory();
  const IsAuthenticated = false;
  return (
    <>
      <Switch>
        <Route exact path="/login" component={/* () => IsAuthenticated ? history.goBack() :  */LoginSignup} />
        <WebLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/memorialize" component={Memorialize} />
            <Route exact path="/sketchboard" component={SketchBoard} />
            <Route component={NotFound} />
            {/* <ProtectedRoutes exact path="/" component={Home} />
            <ProtectedRoutes exact path="/memorialize" component={Memorialize} />
            <ProtectedRoutes exact path="/sketchboard" component={SketchBoard} />
            <ProtectedRoutes component={NotFound} /> */}
          </Switch>
        </WebLayout>
      </Switch>
    </>
  )
}

export default App;
