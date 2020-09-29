import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardsContainer from "./components/CardsContainer";
import "antd/dist/antd.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [err, setErr] = useState("");
  const app_id = "bb42c8a3";
  const app_key = "0b8beccca15195d576a0f8501026e0b2";
  const getData = async (value) => {
    setErr("");
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${value}&app_id=${app_id}&app_key=${app_key}`
      );
      setData(response.data);
      if(response.data.count === 0){
        setErr("no data")
      }
      
      console.log(response)
    } catch (error) {
      console.log(error);
      setErr("no data");
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Search getData={getData} />
      <CardsContainer res={data} err={err} />
    </div>
  );
}

export default App;
