export default function Video(): JSX.Element {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source
          src="src/assets/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
          type="video/mp4"
        />
        {/* Add additional source elements for other video formats if needed */}
        {/* <source src="/path/to/your-video.webm" type="video/webm" /> */}
        {/* <source src="/path/to/your-video.ogv" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
