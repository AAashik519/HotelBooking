import React, { useState } from "react";
import "./list.css";
import Header from "../../components/Header/Header";
import Nabvar from "../../components/Navbar/Nabvar";
import { useFetcher, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import MailList from "../../components/MailList/MailList";
 
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [ min, setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  )

  
  console.log("list ", data)

  const handleClick =()=>{
    reFetch();
  }
  return (
    <div>
      <Nabvar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small> per night</small>
                  </span>
                  <input onChange={e=>setMin(e.target.value)} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small> per night</small>
                  </span> 
                  <input onChange={e=>setMax(e.target.value)} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.adult}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children </span>
                  <input
                    type="number"
                    min={0}
                    placeholder={options.children}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.room}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "Loading please wait" :
              <>
              {data.map((item)=>(
                  <SearchItem item={item}  key={item._id }/>
              ))}
              </>
             
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
