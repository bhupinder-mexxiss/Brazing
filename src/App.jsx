import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products.jsx";
import UnderConstruct from "./Pages/UnderConstuct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/products",
      //   element: <Products />,
      // },
      {
        path: "*",
        element: <UnderConstruct />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
