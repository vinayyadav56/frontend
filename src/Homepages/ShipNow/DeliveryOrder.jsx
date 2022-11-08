import React from 'react';
import {
    TextField,
    Button,
    FormGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
const DeliveryOrder = ({ values, handleFormData, nextStep, prevStep }) => {
    // const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    const handleInputChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        handleFormData(name, val);
    }

    return (
        <div>
            <form onSubmit={submitFormData}>
                <FormGroup >
                    <p className="package_text">Choose Package Size</p>
                    <div className="btn-group-toggle my-4 d-flex" data-toggle="buttons">
                        <label className={"btn ship_select_btns " + (values.package_size == "extra small" ? "active" : "")}  >
                            <input
                                type="radio"
                                name="package_size"
                                defaultValue="extra small"
                                required
                                id="option2"
                                onChange={handleInputChange}
                                checked={() => values.package_size == "extra small"}
                            />
                            100g
                        </label>
                        <label className={"btn ship_select_btns " + (values.package_size == "small" ? "active" : "")}>
                            <input
                                type="radio"
                                name="package_size"
                                defaultValue="small"
                                required
                                id="option2"
                                onChange={handleInputChange}
                                checked={() => values.package_size == "small"}
                            />
                            250g
                        </label>
                        <label className={"btn ship_select_btns " + (values.package_size == "medium" ? "active" : "")}>
                            <input
                                type="radio"
                                name="package_size"
                                defaultValue="medium"
                                required
                                id="option1"
                                onChange={handleInputChange}
                                checked={() => values.package_size == "medium"}
                            />
                            500g
                        </label>
                        <label className={"btn ship_select_btns " + (values.package_size == "large" ? "active" : "")}>
                            <input
                                type="radio"
                                name="package_size"
                                defaultValue="large"
                                id="option2"
                                required
                                onChange={handleInputChange}
                                checked={() => values.package_size == "large"}
                            />
                            1Kg
                        </label>
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="outlined">
                        <InputLabel id="delivery-type">Delivery Type</InputLabel>
                        <Select
                            labelId="delivery-type"
                            name="delivery_type"
                            label='Delivery Type'
                            value={values.delivery_type}
                            required
                            onChange={handleInputChange}
                            defaultChecked={values.delivery_type}
                        >
                            <MenuItem value='express'>Express Delivery</MenuItem>
                            <MenuItem value='premium'>Premium Delivery</MenuItem>
                        </Select>
                    </FormControl>
                    <p className="package_sub_text">Package Details</p>
                    <TextField
                        size="small"
                        name="category"
                        label="Category"
                        variant="outlined"
                        placeholder="Enter Category"
                        fullWidth
                        required
                        margin="normal"
                        defaultValue={values.category}
                        onChange={handleInputChange}
                    />
                    <p className="package_sub_text mt-2">Sub Category</p>
                    <TextField
                        size="small"
                        name="sub_category"
                        label="Sub Category"
                        variant="outlined"
                        placeholder="Enter Sub Category"
                        fullWidth
                        required
                        margin="normal"
                        defaultValue={values.sub_category}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className=" mt-4 mb-4"
                        size="small"
                        name="delivery_cost"
                        label="Package Value"
                        placeholder="Enter Package Value"
                        margin="normal"
                        required
                        onChange={handleInputChange}
                        variant="outlined"
                        defaultValue={values.delivery_cost}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, marginTop: 2, flex: '1 auto' }}>
                        <Button
                            onClick={prevStep}
                            className='address_btn'
                        >
                            Prev
                        </Button>
                        <Button
                            type="submit"
                            sx={{ mt: 5 }}
                            className='address_btn'
                        >
                            Next
                        </Button>
                    </div>
                </FormGroup>
            </form>
        </div>
    )
}

export default DeliveryOrder
