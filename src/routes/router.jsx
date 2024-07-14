import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../layout/Home";
import Login from "../layout/Login";
import SignUp from "../layout/SignUp";
import CheckOut from "../layout/CheckOut";
import BookServices from "../layout/BookServices";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>   
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/bookings',
          element:<PrivateRoute><BookServices></BookServices></PrivateRoute>,
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;