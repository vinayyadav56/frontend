import { useState } from "react";
import "./styles.css";
import tabArray from "./tabArray";

export default function ToSugestion() {
//   const [data, setData] = useState(tabArray);

  const [value, setValue] = useState("");

  const onHandleinput = (event) => {
    setValue(event.target.value);
  };

  const onSearchTo = (searchTermTo) => {
    setValue(searchTermTo);
    // our api to fetch the search result
    console.log("search ", searchTermTo);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input
            name="input1"
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="To"
            id="from"
            value={value}
            onChange={onHandleinput}
          />
          {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
        </div>
        <div className="dropdown">
          {tabArray
            .filter((item) => {
              const searchTermTo = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTermTo &&
                fullName.startsWith(searchTermTo) &&
                fullName !== searchTermTo
              );
            })
            .slice(0, 3)
            .map((item) => (
              <div
                onClick={() => onSearchTo(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}