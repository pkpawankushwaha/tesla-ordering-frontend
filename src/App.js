import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import Home from './page/home'
import Cars from './page/cars'
import Car from './page/car'
import Order from './page/order'
import Ordered from './page/ordered'
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cars" component={Cars}></Route>
            <Route exact path="/ordered" component={Ordered}></Route>
            <Route path="/car/:id" component={Car}></Route>
            <Route path="/order/:id" component={Order}></Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
