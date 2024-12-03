import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AboutUs from "../Pages/AboutUs";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
            path:"/about",
            element: <AboutUs></AboutUs>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    }
])