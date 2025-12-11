import React, { useEffect, useRef } from 'react';

interface VideoIntroProps {
  onVideoEnd: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <video
        ref={videoRef}
        src="assets/intro.mp4"
        onEnded={onVideoEnd}
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoIntro;
