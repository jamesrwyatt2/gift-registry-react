import React from 'react';
import './App.css';
import Registries from './components/Registries';
import Registry from './components/Registry';
import {
  BrowserRouter,
  Routes,
  Route,
	Link,
  Outlet,
  Router,
  useNavigate,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <h1>Giftly App</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Registries/>}>  </Route>
        <Route path="/registry/:id" element={<Registry/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
