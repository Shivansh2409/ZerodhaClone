import axios from "axios";
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/orders",{withCredentials: true});
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } 
    };

    fetchOrders();
  }, []);

  
  const noOreders = ()=>{
    if(orders.length > 0) {
      return (
        <div className="orders">
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td>{order.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }if (orders.length === 0) {
      return (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today{orders.length}</p>

            <Link to={"/"} className="btn">
               Get started
            </Link>
          </div>
        </div>
      );
    }
  }
  return (
    // <div className="orders">
    //   <div className="no-orders">
    //     <p>You haven't placed any orders today</p>

    //     <Link to={"/"} className="btn">
    //       Get started
    //     </Link>
    //   </div>
    // </div>
    <>
      {noOreders()}
    </>
  );
};

export default Orders;
