import React , {useEffect,useState}from "react";
// import { holdings } from "../data/data";

import axios from "axios";

const Holdings = () => {
  const [holdingsData, setHoldingsData] = React.useState([]);
  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/holdings",{withCredentials: true});
        setHoldingsData(response.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    
    fetchHoldings();
  }, []);
  return (
    <>
      <h3 className="title">Holdings ({holdingsData.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdingsData.map((stock, index) => {
            const curvalue = stock.qty * stock.price;
            const isProfit = curvalue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
          
          return (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg}</td>
              <td>{stock.price}</td>
              <td>{curvalue}</td>
              <td className={profClass}>
                {isProfit ? "+" : "-"}
                {(curvalue - stock.avg * stock.qty).toFixed(2)}
              </td>
              <td className={profClass}>
                {isProfit ? "+" : "-"}
                {((curvalue - stock.avg * stock.qty) / (stock.avg * stock.qty) * 100).toFixed(2)}%
              </td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
          );
        })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
