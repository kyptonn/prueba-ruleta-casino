import logo from './logo.svg';
import './App.css';



import  { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom';





import Home from './Pages/Home';
import JuegoRuleta from './Pages/JuegoRuleta';



function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ruleta" component={JuegoRuleta}/>
      
      </Switch>
    </Router>
  );
}

export default App;
