import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import client from './apolloClient.js'; 

// ✅ Correct Apollo Provider Import
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext'; // Ensure the path is correct

// React 18: Use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
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