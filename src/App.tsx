import "./App.css";
import {RouterProvider, createBrowserRouter, RouteObject} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./components/home/Home"
import Category from './components/category/Category'
import LiveMain from "./components/Live/LiveMain";
import Video from "./components/LiveVideoPlayer/Video"
import Login from "./components/login/loginMain/login"
import PlayerContentWarp from "./components/player/PlayerContent";
import {dummyDataList} from "./data/dummyMovieDatas";



// 임시방편.. 원래는 절대 이렇게하는거 아닙니다....
const playerRoutes: RouteObject[] = dummyDataList.map((player) => ({
  path: `/player/${player.movieId}`,
  element: <PlayerContentWarp/>,


  // element: <PlayerContentWarp movieId={player.movieId}
  //                             brandLogoList={player.brandLogoList}
  //                             backdropImage={player.backdropImage}
  //                             videoDetail={player.videoDetail}
  //                             bottomContents={player.bottomContents}/>,
}));




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
    ...playerRoutes

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;