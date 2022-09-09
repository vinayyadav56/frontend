import React from "react";

const CommuterForm = () => {
  return (
    <div>
      <div className="card card-registration">
        <div className="card-body p-4 text-black">
          <h3 className="mb-4 text-uppercase">Become a partner</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  id="fulnm"
                  className="form-control form-control-lg"
                />
            </div>
            <div className="col-md-6 mb-4">
                <input
                  type="text"
                  placeholder="Lastname"
                  id="fulnm"
                  className="form-control form-control-lg"
                />
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="fmem"
              placeholder="Email"
              className="form-control form-control-lg"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <input
                type="text"
                placeholder="State"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="text"
                placeholder="City"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <input
                type="text"
                placeholder="Pincode"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="text"
                placeholder="Contact Number"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              placeholder="Past Experience"
              className="form-control form-control-lg"
            />
          </div>

          <div className="d-flex justify-content-end pt-3">
            <button
              type="button"
              className="btn btn-lg become_form_save"
              data-dismiss="modal"
            >
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuterForm;
