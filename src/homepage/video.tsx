/** @format */
import "./video.css";

export default function Video(): JSX.Element {
  // Replace YOUR_VIDEO_ID with the ID of your video from Vimeo
  const vimeoVideoId = "1124509699";

  return (
    <div className="video-container">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=1&background=1`}
        className="video-iframe"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      ></iframe>
    </div>
  );
}
