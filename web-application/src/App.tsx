import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskPage from './Pages/TaskPage';
import TaskGallery from './Pages/TaskGallery';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/task/:id" element={<TaskPage />} />
              <Route path="/" element={<TaskGallery />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
