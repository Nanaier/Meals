import React from 'react';
import Hls from 'hls.js';

interface VideoProps {
    videoId: string;
  }
  
  const Video: React.FC<VideoProps> = ({ videoId }) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div>
        <iframe
          title="video-player"
          width="100%"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  };

export default Video;