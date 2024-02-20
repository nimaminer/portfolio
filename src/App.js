import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import InfoPage from './pages/infopage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route index  element={<HomePage/>} />
          <Route path='/info' element={<InfoPage/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
