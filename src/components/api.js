import React, { useEffect, useState } from "react";

const Apicall = () => {
const [automobiles,setAutomobiles] = useState([])

  useEffect(() => {
    callApi();
  },[]);
  async function callApi() {
    const data = await fetch("http://localhost:5043/api/Cars");
    const json = await data.json();
    console.log(json);
    setAutomobiles(json[1])
  }
  return (
    <>
      <div>Hello</div>
      <h1>{automobiles.Brand}</h1>
    </>
  );
};

export default Apicall;
