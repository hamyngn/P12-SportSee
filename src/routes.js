import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import User from "./components/User";

const routes = createBrowserRouter([
    {
        path:"/", 
        element: <Layout />,
        children: [
            {
                path: "/user/:id",
                element: <User />
            }
        ]
    }
])
export default routes;
