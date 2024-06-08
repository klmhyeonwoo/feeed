import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@/app/error";
import Main from "@/app/main";
import DefaultLayout from "@/layout/DefaultLayout.tsx";

const routerChildren = [
  {
    path: "/",
    element: <Main />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: routerChildren,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
