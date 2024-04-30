import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = ()=>{
    const {id} = useParams();
    const [details,setDetails] = useState([]);
   
    useEffect(()=>{

      const getData =   async()=>{

        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`);
const json = await data.json();
setDetails(json.data.cards);
console.log(json.data.cards);
        }
        getData();

    },[])

    return(
        <div>
           data here
        </div>
    )
}
export default Details;