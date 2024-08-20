import React from 'react';
import './jaehyung/styles/styles.css';
import MyImage from './jaehyung/component/MyImage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BPage from './jaehyung/component/page/BPage';

function App() {
  return (
    <BrowserRouter>
    <div className="old">
      <div className= "background">
        <div className= "percent">
          PERCENT
        </div>
          <Routes>
              <Route path="/" element={<MyImage />} />
              <Route path="/BPage/:alt" element={<BPage />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
