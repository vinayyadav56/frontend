import React from 'react'
import { Fragment } from 'react'
import './profilecomp.css';
const DocVerification = () => {
    return (
        <Fragment>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <div className="headings">
                            <h3>Documets Details</h3>
                            <p>Update your documents details</p>
                        </div>
                        <form className='document_form'>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='pan'>Pan No** :</label>
                                    <input type="text" id='pan' className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor='licenseno'>License No** :</label>
                                    <input type="text" id='licenseno' className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <label htmlFor='pan'>Rc Number :</label>
                                    <input type="text" id='pan' className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor='licenseno'>Upload Rc Photo:</label>
                                    <input type="file" id='licenseno' placeholder="Upload Photo" className='form-control' />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className='col'>
                                    <label htmlFor="Select">Select Vehicle Type</label>
                                    <select id="Select" className="form-control">
                                        <option defaultValue>Select Vehicle Type</option>
                                        <option>Car</option>
                                        <option>Bus</option>
                                        <option>Train</option>
                                    </select>
                                </div>
                            </div>
                            <div className='doc_footer_btn'>
                                <button className='btn' type='submit'>Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default DocVerification