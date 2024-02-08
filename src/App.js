import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';

import { Navigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import PageNotFound from './Components/PageNotFound';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';


function App() {
  const routers = createHashRouter ([
    {
      path:'', element: <Layout />, children: [
        {path: '' , element: <Home />},
        {path: 'home' , element: <Navigate to= {"/"}/>},
        {path: 'about' , element: <About />},
        {path: 'portfolio', element:<Portfolio />},
        {path: 'contact', element: <Contact />}
      ],
    },
    {path: '*', element:<PageNotFound />},
  ])
  return (
   <>
   <RouterProvider router={routers}></RouterProvider>
   </>
  )
}

export default App;
