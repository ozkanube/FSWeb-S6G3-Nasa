import "./header.css";

const Header = (props) => {
  const { date, setDate } = props;

  const changeHandler = (evt) => {
    setDate(evt.target.value);
  };

  return (
    <header>
      <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
      <input type="date" onChange={changeHandler} value={date} />
    </header>
  );
};

export default Header;
