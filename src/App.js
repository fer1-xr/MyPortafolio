import React from 'react';
import {BrowserRouter,  Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from './components/Navigation'

import Work from "./components/Work"


function App() {
  return (
   
   <div >
     <BrowserRouter>
     <Navigation/>
<Routes>
  <Route>
    <Route index element={ <Home /> } />
    <Route path='Work' element={ <Work /> } />
    <Route path='About' element={ <About /> } />
    <Route path='Contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
     
    </div>
   
  );
}

export default App;
