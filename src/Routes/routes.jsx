import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Medicine from "../Pages/Medicine/Medicine";
import Medicine1 from "../Pages/Medicines/medicine1";
import Medicine2 from "../Pages/Medicines/Medicine2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "home", 
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
