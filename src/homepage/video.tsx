export default function Video() {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source src="src/assets/special.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
        {/* <source src="/path/to/your-video.webm" type="video/webm" /> */}
        {/* <source src="/path/to/your-video.ogv" type="video/ogg" /> */}
      </video>
    </div>
  );
}
