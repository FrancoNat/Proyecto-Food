import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Detail, Form, Home, Landing } from './views';
import { Route, useLocation } from 'react-router-dom';



function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
       <Route exact path= "/" render={() => <Landing/>} />
       <Route exact path="/detail" render={() => <Detail/>} />
       <Route exact path="/create" render={() => <Form/>} />  
       <Route path="/home" render={() => <Home/>} />
    </div>
  );
  
}
            
export default App;

