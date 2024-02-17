import React, { useEffect } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import { useState } from "react";
import axios from "axios";
import Skeleton from "../Skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  // empty dependency array means that, this will run whenever the feed component is loaded...
  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos/1");
        setVideos(res.data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };
    getVideos();
  }, []);

  console.log(videos);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="custom" />
      ) : (
        videos?.map((video) => <Post key={video.id} video={video} />)
      )}
    </div>
  );
};

export default Feed;
