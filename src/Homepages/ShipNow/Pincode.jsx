import {Button, FormGroup, TextField} from '@material-ui/core'
import React, {useState} from 'react';
import {makeRequest} from "../../Services/api";
import {useAuth} from "../../Services/auth";
import {useAlert} from "react-alert";

const Pincode = ({values, handleFormData, nextStep}) => {
    const {setLoading} = useAuth();
    const alert = useAlert();
    const PICKUP_PINCODE = 'pickup_pincode';
    const DELIVERY_PINCODE = 'delivery_pincode';

    const [disabledBtn, setDisabledBtn] = useState(true);
    const [pickupError, setPickupError] = useState(false);
    const [deliveryError, setDeliveryError] = useState(false);

    const handlePincodeInput = async (e) => {
        if(/\D/.test(e.target.value)){
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g,'$1');
            return false;
        }

        if (e.target.value.length > 6) {
            e.target.value = e.target.value.slice(0, 6);
            return false;
        }

        setDisabledBtn(true);

        if (e.target.value.length == 6) {
            let pincode = e.target.value;

            if(e.target.name == 'delivery_pincode' && pincode == values.pickup_pincode){
                alert.error("Enter different delivery Pincode");
                return false;
            }

            let pincodeDetail = await fetchPincodeDetails(pincode);

            if(pincodeDetail.data.length > 0 || Object.keys(pincodeDetail.data).length > 0){
                if(e.target.name == 'pickup_pincode'){
                    handleFormData(DELIVERY_PINCODE, pincode)
                    handleFormData("receiver_address", {
                        ...values.receiver_address,
                        receiver_pincode: pincode,
                        receiver_state: pincodeDetail.data.state,
                        receiver_city: pincodeDetail.data.city
                    })
                    setPickupError(false);
                }else if(e.target.name == 'delivery_pincode'){
                    handleFormData(PICKUP_PINCODE, pincode)
                    handleFormData("sender_address", {
                        ...values.sender_address,
                        sender_pincode: pincode,
                        sender_state: pincodeDetail.data.state,
                        sender_city: pincodeDetail.data.city
                    })
                    setDeliveryError(false);
                    setDisabledBtn(false);
                }


                alert.success(pincodeDetail.message);
            }else{
                if(e.target.name === 'pickup_pincode'){
                    setPickupError(true);
                }else if(e.target.name === 'delivery_pincode'){
                    setDeliveryError(true);
                }

                alert.info(pincodeDetail.message);
            }
        }
    }

    const fetchPincodeDetails = async (pincode) => {
        setLoading(true);
        let pincodeRes;

        try {
            pincodeRes = await makeRequest('POST', 'checkPincodeForDelivery', {
                "pinCode": pincode
            });

        } catch (e) {
            pincodeRes = {
                message: e.message,
                data: []
            }
            alert.error(e.message);
        }

        setLoading(false);
        return pincodeRes;
    }

    return (
        <div>
            <FormGroup>
                <p className='package_text'>Enter Pincode </p>
                <TextField
                    size="small"
                    label="PickUp  Pincode"
                    name="pickup_pincode"
                    variant="outlined"
                    placeholder="Enter Pickup Pincode"
                    fullWidth
                    autoFocus
                    margin="normal"
                    error={pickupError}
                    onChange={handlePincodeInput}
                    defaultValue={values.pickup_pincode}
                />
                <TextField
                    size="small"
                    id="last-name"
                    label="Delivery Pincode"
                    name="delivery_pincode"
                    variant="outlined"
                    placeholder="Enter Delivery Pincode"
                    fullWidth
                    margin="normal"
                    error={deliveryError}
                    onChange={handlePincodeInput}
                    defaultValue={values.delivery_pincode}
                />
                <Button
                    className=' mt-4 btn address_btn'
                    onClick={nextStep}
                    disabled={disabledBtn}
                >
                    Ship Now
                </Button>
                <p className="package_waring_text">Get a free pickup from the comfort of your home</p>
            </FormGroup>
        </div>
    )
}

export default Pincode
