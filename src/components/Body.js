import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { items } from "./constants";

const Body = () => {
  const [items, setItems] = useState([]);
  async function getCarData() {
    const data = await fetch(
      "https://api.zoomcar.com/v7/home?city_honour=true&city=bangalore&country_code=IND&device_id=000&locale=en&platform=web"
    );
    const json = await data.json();
    setItems(json.items);
  }
  React.useEffect(() => {
    getCarData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {items.map((carItem) => {
          return <CarCard {...carItem.car_data} />;
        })}
        {
          //<CarCard {...items[1].car_data} />
        }
      </div>
    </>
  );
};
export default Body;
