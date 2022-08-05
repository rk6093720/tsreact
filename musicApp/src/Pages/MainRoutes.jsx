import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import SingleMusicRecord from "./SingleMusicRecord";
import EditMusicRecord from "./EditMusicRecord";
import Login from "./Login";
import RequireAuth from '../Components/RequireAuth';

const MainRoutes = () => {
  return (
   <Routes>
    <Route  path="/" element={<Homepage/>}/>
    <Route  path="/album/:id" element={<RequireAuth>
      <SingleMusicRecord/>
      </RequireAuth>
      }/>
    <Route  path="/album/:id/edit" element={<EditMusicRecord/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="*" element={<h3>Page Not Found</h3>}/>
   </Routes>
     
  )
}

export default MainRoutes;