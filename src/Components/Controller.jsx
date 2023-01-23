import React from "react";
import { useSelector } from "react-redux";
import Audio from "./Audio";

const Controller = () => {
  const trackInfo = useSelector((state) => state.trackInfoSlice.track);
  // console.log(Object.keys(trackInfo).length);
  let url = "";
  if (Object.keys(trackInfo).length !== 0) {
    url = trackInfo.tracks.items[0].preview_url;
  }
  // console.log(typeof url);
  // console.log("hit");
  return (
    <>
      <div>{url}</div>
      <Audio url={url} />
      {/* <audio controls>
        <source src={url} />
      </audio> */}
    </>
  );
};

export default Controller;
