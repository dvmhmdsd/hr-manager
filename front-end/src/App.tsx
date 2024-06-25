import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo.page";
import Layout from "./shared/Layout";
import FinInfo from "./pages/FinInfo.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: "/financial",
        element: <FinInfo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
