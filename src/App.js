import React, { useEffect, useRef } from 'react';
import HomeView from '../src/views/HomeView';
import ContactView from '../src/views/ContactView';
import SkillView from './views/SkillView';
import ResumeView from './views/ResumeView';
import ProjectView from './views/ProjectView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeView />}></Route>
          <Route path='/home' element={<HomeView />}></Route>
          <Route path='/projects' element={<ProjectView />}></Route>
          <Route path='/skills' element={<SkillView />}></Route>
          <Route path='/contact' element={<ContactView />}></Route>
          <Route path='/resume' element={<ResumeView />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
