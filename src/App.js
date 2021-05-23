import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import r2 from './code/r2';
import R3 from './code/R3';
import R4 from './code/R4';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={r2} />
          <Route exact path='/r3' component={R3} />
          <Route exact path='/r4' component={R4} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
