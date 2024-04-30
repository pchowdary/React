import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Details from './src/components/Details';


const App = ()=>{

    return (
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    );


}
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/details/:id',
                element:<Details/>
            }
        ],
        errorElement:<Error/>
    },
    
])
const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router}/>);

// login,logout,search,react router,link,keep header constant and load content on link navigation,useparams,children path,
