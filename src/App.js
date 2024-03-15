import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/users/Login';
import Register from './component/users/Register';
import Navbar from './component/Home/Navbar';
import Home from './component/Home/Home';
import Transaction from './component/Transaction/Transaction';
import { AuthProvider } from './context/AuthContext';
import CreateTransaction from './component/Transaction/CreateTransaction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreateTransaction/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
