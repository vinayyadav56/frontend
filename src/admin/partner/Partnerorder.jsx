import React, { useEffect, useState } from "react";
import axios from "axios";
const PartnerOrder = () => {
  const [order, setOrder] = useState([]);
  const handlePartnerOrder = async () => {
    const ord = await axios.get("http://35.91.35.188/api/order-all-list/5");
    const partnerList = Object.values(ord.data);
    const list = partnerList[0];
    console.log(list);
    try {
      setOrder(list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePartnerOrder();
  }, []);
  return (
    <div>
      <button
        className="btn btn-success py-0 mr-1"
        data-toggle="modal"
        data-target="#orderPartner"
      >
        Order
      </button>
      <div
        className="modal fade"
        id="orderPartner"
        role="dialog"
        aria-labelledby="orderPartnerTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered add-partner"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderPartnerTitle">
                Order Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="modal-off">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="table-responsive-lg">
                <table>
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
                  <tbody>
            {partnerData
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
                    
                  </tr>
                );
              })}
          </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOrder;
