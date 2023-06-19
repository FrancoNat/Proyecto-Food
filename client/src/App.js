import './App.css';
import { Detail, Form, Home, Landing, } from './views/index';
import { BrowserRouter as Rourter, Route, Routes } from 'react-router-dom';



function App() {
  
  

  return (
    <div className="App">
      <Routes>
       <Route exact path= "/" element={<Landing />} />
       <Route exact path="/detail/:id" element={<Detail />} />
       <Route exact path="/create" element={<Form />} />  
       <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
  
}
            
export default App;
     
      
      

