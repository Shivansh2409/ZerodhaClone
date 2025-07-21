import React ,{useEffect,useState}from "react";
// import {positions} from "../data/data";
import axios from "axios";
const Positions = () => {
  const [positionsData, setPositionsData] = useState([]);
  useEffect(()=>{
    const fetchPositions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/positions",{withCredentials: true});
        setPositionsData(response.data);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };
    
    fetchPositions();
  }, []);
  return (
    <>
      <h3 className="title">Positions ({positionsData.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positionsData.map((stock, index) => {
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
    </>
  );
};

export default Positions;
