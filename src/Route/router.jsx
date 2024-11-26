import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";


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
                path: "*",
                element: <Error></Error>
            }
        ]
    }
])