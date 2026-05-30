
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste';
import { RouterProvider } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
       <Navbar/>
       <Home/>
      </div>

    },
    {
      path:"/pastes",
      element:
      <div>
         <Navbar/>
         <Paste/>

      </div>

    },
    {
      path:"/pastes/:id",
      element:
      <div>
         <Navbar/>
          <ViewPaste/>

      </div>

    },

  ]
);

function App() {
  

  return (
   <div>
    <RouterProvider router={router} />
    <SpeedInsights />
   </div>
      
  )
}

export default App
