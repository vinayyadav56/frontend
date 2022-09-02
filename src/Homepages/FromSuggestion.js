import { useState } from "react";
import "./styles.css";
import tabArray from "./tabArray";

export default function FromSuggestion() {
  const [data, setData] = useState(tabArray);

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
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
        </div>
        <div className="dropdown">
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
              <div
                onClick={() => onSearch(item.full_name)}
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
