import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/news",
    element: <h1>news layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>login</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default routes;
