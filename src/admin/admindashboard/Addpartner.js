import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Newpartner from "./Newpartner";
import { Fragment } from "react";
const Addpartner = () => {
  return (
    <Fragment>
      <div>
        <button
          type="button"
          className="btn add_partner"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <AddIcon />
          Add Partner
        </button>
        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered add-partner"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  New Partner Details
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
                <Newpartner />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editPartner"
        role="dialog"
        aria-labelledby="editPartnerTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered add-partner"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPartnerTitle">
                Partner Details
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
          
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Addpartner;
