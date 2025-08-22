import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import NotFoundPage from './page/NotFoundPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(() => {
    document.title = "Portfolio | Nayem";
  }, []); 

  return (
    <>
      <Toaster position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
