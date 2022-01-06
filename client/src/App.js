import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'


function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register text='Student,Register,Roll no. (20XXBCS-0XX).,Name,College Email ID,text,Get OTP'/>}/>
        </Routes>
        <Routes>
          <Route path="/MyResult" element={<Register text='Student,My Result,Roll no. (20XXBCS-0XX),Semester no.,null,file, Get Result'/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
