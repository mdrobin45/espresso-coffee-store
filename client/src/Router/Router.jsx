import { createBrowserRouter } from "react-router-dom";
import AddNewCoffee from "../Pages/AddNewCoffee/AddNewCoffee";
import CoffeeArchives from "../Pages/CoffeeArchives/CoffeeArchives";
import EditCoffee from "../Pages/EditCoffee/EditCoffee";
import Home from "../Pages/Home/Home";
import ViewCoffeeDetails from "../Pages/ViewCoffeeDetails/ViewCoffeeDetails";
import Root from "../Root/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch("http://localhost:3000/coffee/all"),
         },
         {
            path: "/coffee",
            element: <CoffeeArchives />,
         },
         {
            path: "/coffee/add-new",
            element: <AddNewCoffee />,
         },
         {
            path: "/coffee/edit/:id",
            element: <EditCoffee />,
            loader: ({ params }) =>
               fetch(`http://localhost:3000/coffee/${params.id}`),
         },
         {
            path: "/coffee/view/:id",
            element: <ViewCoffeeDetails />,
            loader: ({ params }) =>
               fetch(`http://localhost:3000/coffee/${params.id}`),
         },
      ],
   },
]);

export default router;
