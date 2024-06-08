import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultLayout from "@/layout/DefaultLayout.tsx";
import Main from "@/app/main";

const routerChildren = [
    {
        path: '/',
        element: <Main/>
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: routerChildren
    }
])

export const Router = () => {
    return <RouterProvider router={router}/>
}