// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import './index.css';
// import App from './App.jsx';
// // import reportWebVitals from './reportWebVitals';
// import client from './apolloClient.js'; 

// // ✅ Correct Apollo Provider Import
// import { ApolloProvider } from '@apollo/client';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/authContext.jsx'; // Ensure the path is correct

// // React 18: Use ReactDOM.createRoot
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <ApolloProvider client={client}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ApolloProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );





















///////////////////////////////// with fixes from main.jsx and app.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App.jsx';
import client from './apolloClient.js'; 

// ✅ Correct Apollo Provider Import
import { ApolloProvider } from '@apollo/client'; //might not need here based on template
import { AuthProvider } from './context/authContext.jsx';

// import Navbar from './components/navbar'; this is in app.jsx based on template
import Homepage from './pages/homepage';
import Register from './pages/register';
import Login from './pages/login';

// ✅ Set up routes using React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Homepage /> 
      },
      { 
        path: "/login", 
        element: <Login /> 
      },
      { 
        path: "/register", 
        element: <Register /> 
      },
    ],
  },
]);

// React 18: Use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>
);




































































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import client from './apolloClient'; 





// // ✅ Correct Apollo Provider Import
// import { ApolloProvider } from '@apollo/client';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/authContext'; // Ensure the path is correct

// // React 18: Use ReactDOM.createRoot
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <ApolloProvider client={client}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ApolloProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );




// import logo from './logo.svg';
// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Navbar from './components/navbar';
// import Homepage from './pages/homepage';
// import Register from './pages/register';
// import Login from './pages/login';

// function App() {
//   return (
//     <div>
//       {/* Navbar component is rendered on all pages */}
//       <Navbar />
//       <main>
//         {/* Define application routes */}
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;