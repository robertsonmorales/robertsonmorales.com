import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from './components/layouts/Default';
import Home from './pages/Home';
// import MoreProjects from './pages/MoreProjects';
import Page404 from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <DefaultLayout /> }>
          <Route index element={ <Home /> }></Route>
          {/* <Route path='/projects' element={ <MoreProjects /> }></Route> */}
          <Route path='*' element={ <Page404 /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
