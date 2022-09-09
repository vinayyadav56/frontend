import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
// import tabArray from "./tabArray";

export default function FromSuggestion() {
  // const [data, setData] = useState(tabArray);
  // const [data, setData] = useState(tabArray);

  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  //   // our api to fetch the search result
  //   console.log("search ", searchTerm);
  // };

  // fetch from and to locations
  const fetchLocation = async () => {
    const res = await axios.post(
      "http://35.91.35.188/api/user-availability-fetch",
      {}
    );
    console.log(res);
    try {
      var myArray = [];
      console.log("myArray " + myArray);
      for (let i = 0; i <= res.data.userAvailability.length; i++) {
        var myData = [res.data.userAvailability[i].fromlocation];
        myArray.push(...myData)
        console.log("myArray " + myArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("from " + JSON.stringify(from));

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <p className="App">
      <p className="search-container">
        <p className="search-inner">
          <input
            name="input1"
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="From"
            id="from"
            value={value}
            onChange={onChange}
          />
          {/* <button onClick={() => onSearch(value)}> Search </button> */}
        </p>
        {/* <p className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 3)
            .map((item) => (
              <p
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </p>
            ))}
        </p> */}
      </p>
    </p>
  );
}
