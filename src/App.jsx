// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
// import Paste from './components/Paste';   
// import ViewPaste from './components/ViewPaste';  
// import Navbar from './components/Navbar'; 
// import Home from './components/Home';    
  
// const router = createBrowserRouter(
//   [
//     {
//       path: "",
//       element: (
//         <div>
//           <Navbar />
//           <Home />
//         </div>
//       ),
//     },
//     {
//       path: "/pastes",
//       element: (
//         <div>
//           <Navbar />
//           <Paste />
//         </div>
//       ),
//     },
//     {
//       path: "/pastes/:id",
//       element: (
//         <div>
//           <Navbar />
//           <ViewPaste />
//         </div>
//       ),
//     },
//   ]
// )

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App
import { Routes, Route } from 'react-router-dom';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastes" element={<Paste />} />
        <Route path="/pastes/:id" element={<ViewPaste />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;