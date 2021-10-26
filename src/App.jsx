import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebLayout from './components/layout/WebLayout';

function App() {
  return (

    <WebLayout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </WebLayout>
  )
}

export default App;
