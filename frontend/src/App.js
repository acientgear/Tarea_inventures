// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';


import MenubarComponent from './components/nav';
import ListUrls from './pages/listaUrls';
import AcortarUrlPage  from './pages/crearUrl';
import Redireccionar from './components/redireccionar';

function App() {

  return (
    <Router>
      <MenubarComponent/>
        <Routes>
          <Route path="/:sufijo" element={<Redireccionar />} />
          <Route path="/acortar" element={<AcortarUrlPage />} />
          <Route path="/list" element={<ListUrls/>} />

        </Routes>
    </Router>
  );
}

export default App;


