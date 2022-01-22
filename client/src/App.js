import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/Register/Register';
import MyResult from './pages/MyResult/MyResult';
import Home from './pages/Home/Home'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import Upload from './pages/Upload/Upload'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/student/register" element={<Register isSignUpFlow={true} text='Register'/>}/>
        </Routes>
        <Routes>
          <Route path="/student/login" element={<Register isSignUpFlow={false} text='Login'/>}/>
        </Routes>
        <Routes>
          <Route path="/student/MyResult" element={<MyResult />}/>
        </Routes>
        <Routes>
          <Route path="/admin/upload" element={<Upload />}/>
        </Routes>
        <Routes>
          <Route path="/admin/AdminLogin" element={<AdminLogin/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
