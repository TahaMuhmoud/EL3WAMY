import React from "react";
import { Link, useParams } from "react-router-dom";

function VideoNotavailable() {
  const params = useParams();
  const { id, type } = params;
  return (
    <div className="container w-full h-screen flex flex-col items-center justify-center text-white">
      <div className="text-2xl md:text-4xl text-center">
        Video is not available now it will be here{" "}
        <span className="block text-mainColor-100 text-6xl md:text-9xl font-extrabold uppercase">
          soon
        </span>
      </div>
      <Link
        to={`/${type}/${id}`}
        className="mt-10 bg-mainColor-100 px-5 py-3 rounded-lg capitalize"
      >
        go back
      </Link>
    </div>
  );
}

export default VideoNotavailable;
