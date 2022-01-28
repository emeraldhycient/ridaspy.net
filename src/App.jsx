import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

import Index from './pages/Index'
import Pricing from './pages/Pricing';
import Compatibility from './pages/Compatibility';
import Products from './pages/Products';
import Home from './pages/Redesign/Home';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Pricing" component={Pricing}/>
      <Route path="/products" component={Products}/>
      <Route path="/compatibility" component={Compatibility}/>

      </Switch>
    </Router>
  );
}

export default App;
