import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
const UserOrder = () => {
    const id = useParams;
    const [order, setOrder] = useState([]);
    const url = `http://35.91.35.188/api/order-all-list/${id}`;
    const fetchOrder = async() =>{
       const response = await axios.get(url)
       console.log(response)
       try {
        setOrder(response)
       } catch (error) {
        console.log(error);
       }
    }
    useEffect(() => {
        fetchOrder();
      }, []);
  return (
    <>
    <div className='order_all_list mt-5'>
    <div className="table-responsive-lg">
        <table striped hovered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pincode</th>
              <th>State</th>
              <th>City</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {tdata
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.partner_name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) 
                ) {
                  return val;
                }
              })
              .map((item, id) => {
                return (
                  <tr key={id} style={{ margin: "10px 0 10px 0" }}>
                    <td>{id + 1}</td>
                    <td>{item.partner_name}</td>
                    <td>{item.partner_email}</td>
                    <td>{item.partner_phone}</td>
                    <td>{item.partner_pincode}</td>
                    <td>{item.partner_state} </td>
                    <td>{item.partner_city} </td>
                    <td>{item.partner_address} </td>
                    <td>
                      <button
                        className="btn delete-btn"
                        onClick={(id) => deleteData(id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody> */}
        </table>
      </div>
    </div>
    </>
  )
}

export default UserOrder