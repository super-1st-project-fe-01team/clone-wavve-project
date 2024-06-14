import "./App.css";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./components/home/Home"
import Category from './components/category/Category'
import LiveMain from "./components/Live/LiveMain";
import Video from "./components/LiveVideoPlayer/Video"
import Login from "./components/login/loginMain/login"




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHeader/>,
    children: [
      { path: "/", element: <Home /> },
      {path: "/category", element: <Category/>},
      {path: "/home", element: <Home/>},
      {path: "/live-main", element: <LiveMain/>},
      {path: "/video", element: <Video/>},
      {path: "/login", element: <Login/>},

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;