// Global style 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import from react
import {BrowserRouter, Routes,Route} from "react-router-dom"
//import from pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products'
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
