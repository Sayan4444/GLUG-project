import React from "react";

// https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123

const Login = () => {
  const clickHandler = async () => {
    // const client_id = "b10ac7cc459d474e961a6603c15da715";
    const client_id = "be83830d57ea4636b50e544cc2f38b65";
    const redirect_uri = "http://localhost:3000/"; //after authentication it will redirected to this url
    const api_uri = "https://accounts.spotify.com/authorize";
    // const scope = [
    //   "user-read-private",
    //   "user-read-email",
    //   "user-modify-playback-state",
    //   "user-read-playback-state",
    //   "user-read-currently-playing",
    //   "user-read-recently-played",
    //   "user-top-read",
    // ];
    const scope = [
      "ugc-image-upload",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-follow-modify",
      "user-follow-read",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`; //this automatically redirects to this url before authentication
  };
  return (
    <>
      <div className="h-screen w-screen bg-green-600 flex flex-col items-center justify-center space-y-14">
        <img
          className="w-[30rem]"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          alt="image"
        />
        <button
          className="bg-black px-10 py-3 text-green-600 rounded-3xl font-bold"
          onClick={clickHandler}
        >
          Connect spotify
        </button>
      </div>
    </>
  );
};

export default Login;
