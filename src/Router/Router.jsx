import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Components/Products/Products";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path : '/home',
        element : <p>Home</p>
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path : '/about',
        element : <p>About</p>
      }
    ],
  },
]);
export default myRoute;
