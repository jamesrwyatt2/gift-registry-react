import React from 'react';
import './App.css';
import Registries from './components/Pages/Dashboard';
import Registry from './components/Registry/Registry';
import Home from './components/Pages/Home';

import EditRegistry from './components/EditRegistry';

import Dashboard from './components/Pages/Dashboard';

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
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}>  </Route>
        <Route path="/home" element={<Home/>}>  </Route>
        <Route path="/registry/:id" element={<Registry/>}> </Route>
        <Route path="/registry/:id/edit" element={<EditRegistry/>}> </Route>
        
        <Route path="/new/location" element={<Registries/>}>  </Route>
        <Route path="/new/event" element={<Registries/>}>  </Route>
        <Route path="/new/title" element={<Registries/>}>  </Route>
        <Route path="/new/description" element={<Registries/>}>  </Route>

        </Routes>
      </BrowserRouter>
  

    </div>
  );
}

export default App;
