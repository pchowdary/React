import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CardContainer from "./CardContainer";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [text, setText] = useState('');

  useEffect(() => {
    getData().then((res) => {
      setResData(res);
      setFilterData(res);
      setText('');
    });
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9566294&lng=77.70468230000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

   
    return json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  };

  if(!filterData.length){
    return <div>Loading.....</div>;
  }
  return (
    <div className="body">
        <div className="search" ><input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input><button 
        onClick={()=>{
           const result =  resData.filter((data)=>{
               return data.info.name.includes(text);
            })
            setFilterData(result);
        }}>Search</button></div>
              {filterData?.map((res) => {
        return (
          <CardContainer
            resName={res.info.name}
            cost={res.info.costForTwo}
            area={res.info.areaName}
            rating={res.info.avgRating}
            image={res.info.cloudinaryImageId}
            id={res.info.id}
          />
        );
      })}
    </div>
  );
};

export default Body;
