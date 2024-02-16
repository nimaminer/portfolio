import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Home from './sections/home/home';
import InfoPage from './pages/infopage';

function App() {

  let c = "green"
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path='/portfolio' element={<HomePage/>} />
          <Route path='/info' element={<InfoPage/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
