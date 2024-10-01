import Home from "./components/home/Home";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <p>My projects</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
