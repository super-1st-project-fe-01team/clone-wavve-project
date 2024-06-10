import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [{ path: "", element: <></> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
