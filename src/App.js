import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
