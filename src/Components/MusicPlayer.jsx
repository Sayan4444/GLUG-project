import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller";
import { setTrack } from "../Store/trackInfoSlice";
import Header from "./Header";

const MusicPlayer = () => {
  // const dispatch = useDispatch();
  // const [song, setSong] = useState("");
  // const token = useSelector((state) => state.tokenSlice.token);

  // const getTrackInfo = async (query) => {
  //   const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
  //   try {
  //     const response = await fetch(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     // console.log(data);
  //     dispatch(setTrack(data));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const submitHandler = () => {
  //   const songModified = song.trim().split(" ").join("+");
  //   getTrackInfo(songModified);
  // };

  // const changeHandler = (e) => {
  //   setSong(e.target.value);
  // };
  return (
    <>
      {/* <input
        type="text"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        className="border-2 border-black"
      />
      <button onClick={submitHandler} className="border-2 border-black">
        Submit
      </button> */}
      <Header />
      <Controller />
    </>
  );
};

export default MusicPlayer;
