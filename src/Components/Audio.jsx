import React from "react";

const Audio = ({ url }) => {
  console.log("Hit");
  return (
    <>
      <audio controls>
        <source src={url} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Audio;
