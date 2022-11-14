import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  const { data, error, loading } = useFetch("/hotels/featured=true&limit=4");
  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading Please wait"
      ) : (
        <>
        {data.map((item)=>(

        <div className="fpItem" key={item._id}>
          <img
            className="fpItemImg"
            src={item.photos[0]}
            alt=""
          />

          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        { item.rating &&  <div className="fpRating">
            <button>{item.rating}</button>
            <span> </span>
          </div>}
        </div>
        ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
