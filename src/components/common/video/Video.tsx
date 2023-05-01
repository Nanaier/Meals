import React from "react";
import { Box } from "@mui/material";

interface VideoProps {
  videoId: string | null;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Box>
      <iframe
        title="video-player"
        width="100%"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Box>
  );
};

export default Video;
