import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import User from "./components/User";
import Activity from "./components/Activity";
import AverageSession from "./components/AverageSession";
import Performance from "./components/Performance";

const routes = createBrowserRouter([
    {
        path:"/", 
        element: <Layout />,
        children: [
            {
                path: "/user/:id",
                element: <User />
            },
            {
                path: "/user/:id/activity",
                element: <Activity />
            },
            {
                path: '/user/:id/average-sessions',
                element: <AverageSession />
            },
            {
                path: '/user/:id/performance',
                element: <Performance />
            }
        ]
    }
])
export default routes;
