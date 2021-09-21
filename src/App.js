import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import Home from './page/home'
import Cars from './page/cars'
import Car from './page/car'
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cars" component={Cars}></Route>
            <Route path="/car/:id" component={Car}></Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
