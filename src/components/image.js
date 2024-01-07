import "./image.css";

const Image = (props) => {
  const { url } = props;
  return (
    <div className="image-container">
      <img src={url} />
    </div>
  );
};

export default Image;
