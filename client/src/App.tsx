import { type FC } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Detail from "./pages/detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Protected from "./components/protected";
import Dashboard from "./pages/dashboard";
import Edit from "./pages/edit";
import Create from "./pages/create";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/shoe/:id",
        element: (
          <Protected>
            <Detail />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/dashboard/create",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Create />
          </Protected>
        ),
      },
      {
        path: "/dashboard/edit/:id",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Edit />
          </Protected>
        ),
      },
    ],
  },
]);

const App: FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
