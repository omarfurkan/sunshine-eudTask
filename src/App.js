import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/Login/Login';
import BuyCourse from './Component/BuyCourse/BuyCourse';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buycourse/:id" element={
          <RequireAuth>
            <BuyCourse />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
