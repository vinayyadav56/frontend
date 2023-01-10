import React from "react";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import trip from "../images/triplocation.png";
import "./homepage.css";
import BasicTabs from "./TabPanel";

const Tripsearch = () => {
  // const [srchform, setSrchform] = useState();
  return (
    <div>
      <div className="trip_search">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div
                className="btn_group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn select_btn">
                  <span>
                    <AirplanemodeActiveSharpIcon className="btn_icn" />
                  </span>
                  <span>Flight</span>
                </button>
                <button type="button" className="btn select_btn">
                  <span>
                    <DirectionsTransitFilledIcon className="btn_icn" />
                  </span>
                  <span>Train</span>
                </button>
                <button type="button" className="btn select_btn">
                  <span>
                    <DirectionsCarIcon className="btn_icn" />
                  </span>
                  <span>Car</span>
                </button>
                <button type="submit" className="btn search_submit mb-2">
                  Search
                </button>
              </div>
             
            </div>
            <form className="form-inline">
              <div className="">
                {/* radio */}
                {/* <div className="d-flex mb-5">
                  <label class="radio-sec">
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-sec">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div> */}
                {/* radio */}

                {/* tab panels */}
                <BasicTabs />
                {/* tab panels ends */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tripsearch;
