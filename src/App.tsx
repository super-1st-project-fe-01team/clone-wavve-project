import "./App.css";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Category from './components/category/Category'
import CategoryTitle from "./components/category/CategoryTitle";
import Footer from "./components/footer/Footer";
import HeaderFilter from "./components/Live/HeaderFilter";
import HeaderIcon from "./components/Live/HeaderIcon";
import LiveMain from "./components/Live/LiveMain";
import Video from "./components/LiveVideoPlayer/Video"
import VideoIcon from "./components/LiveVideoPlayer/VideoIcon"
import VideoPairing from "./components/LiveVideoPlayer/VideoPairing"
import Login from "./components/login/loginMain/login"
import LoginTop from "./components/login/top/loginTop"
import LoginMid from "./components/login/mid/loginMid"
import LoginBottom from "./components/login/bottom/loginBottom"
import Navigation from "./components/navigation/Navigation"
import Utilmenu from "./components/navigation/Utilmenu"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Utilmenu/>,
    children: [
      {path: "Category", element: <Category/>},
      {path: "/CategoryTitle", element: <CategoryTitle/>},
      {path: "/Footer", element: <Footer/>},
      {path: "/HeaderFilter", element: <HeaderFilter/>},
      {path: "/HeaderIcon", element: <HeaderIcon/>},
      {path: "/LiveMain", element: <LiveMain/>},
      {path: "/Video", element: <Video/>},
      {path: "/VideoIcon", element: <VideoIcon/>},
      {path: "//VideoPairing", element: <VideoPairing/>},
      {path: "/login", element: <Login/>},
      {path: "/loginTop", element: <LoginTop/>},
      {path: "/LoginMid", element: <LoginMid/>},
      {path: "/LoginBottom", element: <LoginBottom/>},
      {path: "/Navigation", element: <Navigation/>},
      {path: "/Utilmenu", element: <Utilmenu/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;