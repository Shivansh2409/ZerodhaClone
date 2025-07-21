import React ,{useState,useContext} from "react";
import {Tooltip,Grow} from "@mui/material";
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown, MoreHoriz} from '@mui/icons-material';
import {KeyboardArrowUp} from '@mui/icons-material';
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return(
            
            <WatchListItem
            key={index}
            stock={stock}
          />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [hover, sethover] = useState(false);
  
  const handleMouseEnter = (e) => {
    sethover(true);
  };
  const handleMouseLeave = (e) => {
    sethover(false);
  };

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item" style={{marginLeft: hover ? "10px" : "0px",paddingLeft:"0px"}}>
        <p className={stock.isDown? "down":"up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down"></KeyboardArrowDown>) : (<KeyboardArrowUp className="up"></KeyboardArrowUp>)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {hover && <WatchListActions uid={stock.name} />}
      {/* {<WatchListActions uid={stock.uid} />} */}
    </li>
  );

  
}

const WatchListActions=({uid})=>{

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return(
    <span className="actions" >
      <Tooltip title="Buy" placement="top" TransitionComponent={Grow} arrow onClick={handleBuyClick}>
        <button className="buy btn ">B</button>
      </Tooltip>
      <Tooltip title="Sell" placement="top" TransitionComponent={Grow} arrow>
        <button className="sell btn ">S</button>
      </Tooltip>
      <Tooltip title="Sell" placement="top" TransitionComponent={Grow} arrow>
        <button className="btn action" style={{padding:"0.25rem"}}><BarChartOutlined className="icon"/></button>
      </Tooltip>
      <Tooltip title="More" placement="top" TransitionComponent={Grow} arrow>
        <button className="btn action" style={{padding:"0.25rem"}}><MoreHoriz className="icon"/></button>
      </Tooltip>
    </span>
  )
}
