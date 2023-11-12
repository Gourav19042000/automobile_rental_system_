import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";


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
    <><div>
       <h1 className="font-extrabold m-5 text-justify text-2xl">Cars </h1>
    </div>
      <div className="flex flex-wrap justify-center mt-2">
       
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
