import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="bg-gray-800 text-white w-full h-screen">
      <button className="py-4 px-3 bg-amber-400 m-4"
        onClick={async () => {
          const data = await fetchPhotos("cat");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>
      <button
      className="py-4 px-3 bg-amber-400 m-4"
        onClick={async () => {
          const data = await fetchVideos("cat");
          console.log(data.videos);
        }}
      >
        Get Videos
      </button>
    </div>
  );
};

export default App;
