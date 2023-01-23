import React from "react";
import Login from "./Components/Login";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./Store/tokenSlice";
import MusicPlayer from "./Components/MusicPlayer";

const App = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.tokenSlice.token);
  let hash = window.location.hash; //returns the part of the url with #
  if (hash) {
    token = hash.substring(1).split("&")[0].split("=")[1]; //taking out the token from the url
    dispatch(setToken(token));
  }

  return <>{hash ? <MusicPlayer /> : <Login />}</>;
  // return <>{hash ? <Spotify /> : <Login />}</>;
};

export default App;
