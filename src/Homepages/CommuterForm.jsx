import React from "react";

const CommuterForm = () => {
  return (
    <div>
      <div class="card card-registration">
        <div class="card-body p-4 text-black">
          <h3 class="mb-4 text-uppercase">Become a partner</h3>
          <div class="row">
            <div class="col-md-6 mb-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  id="fulnm"
                  class="form-control form-control-lg"
                />
            </div>
            <div class="col-md-6 mb-4">
                <input
                  type="text"
                  placeholder="Lastname"
                  id="fulnm"
                  class="form-control form-control-lg"
                />
            </div>
          </div>
          <div class="form-outline mb-4">
            <input
              type="text"
              id="fmem"
              placeholder="Email"
              class="form-control form-control-lg"
            />
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                type="text"
                placeholder="State"
                class="form-control form-control-lg"
              />
            </div>
            <div class="col-md-6 mb-4">
              <input
                type="text"
                placeholder="City"
                class="form-control form-control-lg"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                type="text"
                placeholder="Pincode"
                class="form-control form-control-lg"
              />
            </div>
            <div class="col-md-6 mb-4">
              <input
                type="text"
                placeholder="Contact Number"
                class="form-control form-control-lg"
              />
            </div>
          </div>
          <div class="form-outline mb-4">
            <input
              type="text"
              placeholder="Past Experience"
              class="form-control form-control-lg"
            />
          </div>

          <div class="d-flex justify-content-end pt-3">
            <button
              type="button"
              class="btn btn-lg become_form_save"
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
