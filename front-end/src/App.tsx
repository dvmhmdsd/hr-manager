import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersonalInfo />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
