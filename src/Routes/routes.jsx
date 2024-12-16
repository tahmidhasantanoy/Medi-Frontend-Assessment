import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Medicine from "../Pages/Medicine/Medicine";
import HomeCopy from "../Pages/Home/HomeCopy";
import Medicine1 from "../Pages/Medicines/medicine1";
import Medicine2 from "../Pages/Medicines/Medicine2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Navigate to="/home" replace={true} />, // Redirect to "/medicine"
      },
      {
        path: "home", // Explicitly define the "/home" route
        element: <Home />,
      },
      {
        path: "medicine1",
        element: <Medicine1 />,
      },
      {
        path: "medicine2",
        element: <Medicine2 />,
      },
    ],
  },
  {
    path: "medicine",
    element: <Medicine />,
    children: [
      {
        index: true,
        element: <h1>Welcome to Medicine Page</h1>, // Default child route for "/medicine"
      },
    ],
  },
]);

export default router;
