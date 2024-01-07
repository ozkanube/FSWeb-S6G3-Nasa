import "./video.css";

const Video = (props) => {
  const { url } = props;
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Pwe-pA6TaZk?si=KyvhhkRvM1vBoZGo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default Video;
