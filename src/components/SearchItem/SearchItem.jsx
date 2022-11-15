import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        className="searchItemImg"
        src={item.photos[0]}
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name} </h1>
        <span className="siDistance">{item.distance} from center </span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
           {item.dese}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails"> 
       {item.rating && <div className="siRatting">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp"> Include taxes and fees</span>
            <Link to={ `/hotels/${item._id}`}>
            <button className="siCheckButton">See availablity</button>
            </Link>
            
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
