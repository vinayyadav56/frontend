import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const PartnerOrder = () => {
  const [filterPartnerList, setFilterPartnerList] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "http://35.91.35.188/api/order-all-list/5"
    );
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    console.log(list);
    try {
      setPartnerData(list);
      setSearchapiData(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete function start

  // searchfuntion
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      partnerData(searchapiData);
    } else {
      const filterResult = searchapiData.filter((item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPartnerData(filterResult);
      filterPartnerList();
    }
    setFilterPartnerList(e.target.value);
  };
  return (
    <div>
      <div>
        <button
          className="btn btn-success py-0 mr-1"
          data-toggle="modal"
          data-target="#orderPartner"
        >
          Order
        </button>
        <div
          className="modal bd-example-modal-xl fade"
          id="orderPartner"
          role="dialog"
          aria-labelledby="orderPartnerTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl add-partner"
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
                    <thead></thead>
                    <tbody>
                      {partnerData.map((item, id) => {
                        return (
                          <tr key={id} style={{ margin: "10px 0 10px 0" }}>
                            <td>{id + 1}</td>     
                            <tl className="d-block">{item.sender_name} </tl>
                            <tl className="d-block">{item.sender_email}</tl>
                            <tl className="d-block">{item.sender_phone}</tl>
                            <tl className="d-block">{item.sender_pincode}</tl>
                            <tl className="d-block">{item.sender_state} </tl>
                            <tl className="d-block">{item.sender_city} </tl>
                            <tl className="d-block">{item.sender_address} </tl>
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
    </div>
  );
};

export default PartnerOrder;
