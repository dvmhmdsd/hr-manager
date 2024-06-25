import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo.page";
import Layout from "./shared/Layout";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
