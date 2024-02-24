import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVisibilityChange = () => {
    const isInView = isInViewport(videoRef.current);
    setIsPlaying(isInView);
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return (
    <div>
      <h2>{title}</h2>
      <video
        ref={videoRef}
        src={src}
        controls={false}
        autoPlay={isPlaying}
        loop
        muted
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoPlayer;
