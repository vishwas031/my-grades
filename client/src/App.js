import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Nav1 from './components/Nav/Nav';
import Register from './pages/Register/Register';
import MyResult from './pages/MyResult/MyResult';
import Home from './pages/Home/Home'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register isSignUpFlow={true} text='Register'/>}/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Register isSignUpFlow={false} text='Login'/>}/>
        </Routes>
        <Routes>
          <Route path="/MyResult" element={<MyResult />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
