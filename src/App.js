import React from 'react';
import './App.css';
import Registries from './components/ViewRegistries';
import Registry from './components/Registry';
import EditRegistry from './components/EditRegistry';

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

  const CreateHeader = () => {
    return(
      <div>
        <h1>Brilliant Registry</h1>
      </div>
    )
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Registries/>}>  </Route>
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
