import React, { useEffect, useRef } from 'react';

interface VideoIntroProps {
  onVideoEnd: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        videoElement.play().catch(error => {
          console.error("Video autoplay was prevented: ", error);
        });
      }
    };

    playVideo();

    videoElement?.addEventListener('canplaythrough', playVideo);

    return () => {
      videoElement?.removeEventListener('canplaythrough', playVideo);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <video
        ref={videoRef}
        src="/assets/intro.mp4"
        onEnded={onVideoEnd}
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="auto"
      />
    </div>
  );
};

export default VideoIntro;