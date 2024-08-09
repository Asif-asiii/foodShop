import React, { useContext, useState,useEffect } from 'react'
import {StoreContext} from "../../context/StoreContext"
import {assets} from "../../assets/assets.js"
import "./MyOrder.css"
const MyOrder = () => {
    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

  const fetchOrders = async ()=>{
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(()=>{
      if(token){
        fetchOrders();
      }
  },[token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
         {data.map((order,index)=>{
              return (
                <div className='my-orders-order' key={index}>
                  <img src={assets.parcel_icon} alt=''/>
                  <p>hello</p>
                </div>
              )
         })}
      </div>
    </div>
  )
}

export default MyOrder
