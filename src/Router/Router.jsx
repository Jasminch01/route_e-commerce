import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Components/Products/Products";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path: "/products",
        loader : ()=> fetch('https://dummyjson.com/products'),
        element: <Products></Products>,
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact', 
        element : <Contact></Contact>
      }
    ],
  },
]);
export default myRoute;
