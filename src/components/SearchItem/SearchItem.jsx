import React from "react";
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
        <div className="siRatting">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp"> Include taxes and fees</span>
            <button className="siCheckButton">See availablity</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
