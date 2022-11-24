import React from 'react'
import ShipingOrder from './ShipingOrder';
const ModalForm = () => {
    return (
        <div>
            <button type="button" className="btn home_shipnow" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                Ship Now
            </button>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                    <div className="modal-content">
                        <button type="button" className="close ml-auto mr-3" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <ShipingOrder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm
