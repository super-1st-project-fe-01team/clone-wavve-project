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
import PlayerContentWarp from "./components/player/PlayerContent";
import PlayerItem from "./components/player/PlayerItem";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Utilmenu/>,
    children: [
      {path: "/category", element: <Category/>},
      {path: "/category-title", element: <CategoryTitle/>},
      {path: "/footer", element: <Footer/>},
      {path: "/header-filter", element: <HeaderFilter/>},
      {path: "/header-icon", element: <HeaderIcon/>},
      {path: "/live-main", element: <LiveMain/>},
      {path: "/video", element: <Video/>},
      {path: "/video-icon", element: <VideoIcon/>},
      {path: "/video-pairing", element: <VideoPairing/>},
      {path: "/login", element: <Login/>},
      {path: "/login-top", element: <LoginTop/>},
      {path: "/login-mid", element: <LoginMid/>},
      {path: "/login-bottom", element: <LoginBottom/>},
      {path: "/navigation", element: <Navigation/>},
      {path: "/utilmenu", element: <Utilmenu/>},
      {path:"/player/:id", element:<PlayerContentWarp/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;