// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'
// // import { Provider } from 'react-redux'
// // import { store } from './store.js'
// // import { Toaster } from 'react-hot-toast'
// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <Provider store = {store}>
// //     <App />
// //     <Toaster/>
// //     </Provider>
   
// //   </StrictMode>,
// // )

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './store.js';
// import { Toaster } from 'react-hot-toast';

// const root = document.getElementById('root');

// createRoot(root).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//       <Toaster position="top-right" reverseOrder={false} />
//     </Provider>
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { Toaster } from 'react-hot-toast';

// ✅ Import HashRouter
import { HashRouter } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </HashRouter>
    </Provider>
  </StrictMode>
);
