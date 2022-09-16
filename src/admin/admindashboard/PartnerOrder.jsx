import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const PartnerOrder = () => {
  const [filterPartnerList, setFilterPartnerList] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/order-all-list/3");
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
    </div>
  )
}

export default PartnerOrder;
