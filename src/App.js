import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import fakeData from "./sahte-veri";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dateNow = new Date();
  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(dateNow.toISOString().slice(0, 10));

  useEffect(() => {
    setData(null);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((res) => {
        setData(res.data);
      });
  }, [date]);

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      {data ? <Main data={data} setData={setData} /> : <p>Loading...</p>}
      <Footer />
    </div>
  );
}

export default App;
