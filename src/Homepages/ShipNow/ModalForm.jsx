import React, {useEffect, useRef} from 'react'
import ShipingOrder from './ShipingOrder';
const ModalForm = () => {
    const openBtn = useRef();
    const closeBtn = useRef();

    useEffect(() => {
        checkShipmentPrefill();
    }, []);

    const checkShipmentPrefill = () => {
        const shipmentDetails = window.localStorage.getItem('shipment_details');

        if(shipmentDetails && shipmentDetails.length > 0){
            openBtn.current.click();
        }
    }

    const handleModalClose = () => {
        closeBtn.current.click();
    }

    return (
        <div>
            <button
                type="button"
                className="btn home_shipnow"
                data-target="#myModal"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                ref={openBtn}
            >
                Ship Now
            </button>
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close ml-auto mr-3"
                            data-dismiss="modal"
                            aria-label="Close"
                            ref={closeBtn}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <ShipingOrder modalClose={handleModalClose}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm
