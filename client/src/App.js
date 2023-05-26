import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Detail, Form, Home, Landing, About } from './views';
import { Route, useLocation } from 'react-router-dom';



function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/home" && <NavBar/>}
       <Route exact path= "/" render={() => <Landing/>} />
       <Route exact path="/detail/:id" render={() => <Detail/>} />
       <Route exact path="/create" render={() => <Form/>} />  
       <Route path="/home" render={() => <Home/>} />
       <Route path="/about" render={() => <About/>} />
    </div>
  );
  
}
            
export default App;

