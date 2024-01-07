import Image from "./image";
import "./main.css";
import Video from "./video";

const Main = (props) => {
  const { data } = props;

  return (
    <div className="main-container">
      <h1>{data.title}</h1>
      {data.media_type === "image" ? (
        <Image url={data.url} />
      ) : (
        <Video url={data.url} />
      )}
      <div className="details-container">
        <p>{data.copyright}</p>
        <p>{data.date}</p>
      </div>
      <p>{data.explanation}</p>
    </div>
  );
};

export default Main;
