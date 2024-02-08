import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add3 from './components/Add3';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Add3/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path='/view' element={<View/>}/>

      </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
