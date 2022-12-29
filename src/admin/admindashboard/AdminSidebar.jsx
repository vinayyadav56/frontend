import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import navArray from "./navArray";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { useAuth } from '../../Services/auth';
import Modal from 'react-bootstrap/Modal';
// import { makeRequest } from "../Services/api";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { makeRequest } from '../../Services/api';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};
const AdminSidebar = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    order_id: "",
    order_type: ""
  })
  const [newOrder, setNewOrder] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setLoading } = useAuth();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const orderStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    makeRequest('POST', `tracking/orderTrackingStatus`, data).then(result => {
      setNewOrder(result.orderTraking);
    })
      .finally(() => {
        setLoading(false);
      })
  }

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const AdjustIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .AdjustIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .AdjustIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function AdjustIcon(props) {
    const { active, completed, className } = props;

    return (
      <AdjustIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CheckCircleIcon className="AdjustIcon-completedIcon" />
        ) : (
          <div className="AdjustIcon-circle" />
        )}
      </AdjustIconRoot>
    );
  }

  AdjustIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };
  return (
    <>
      <div className="sidebar">
        <button id="close-btn">
          <CloseRoundedIcon />
        </button>
        <div className="responsive-sidebar">
          <NavLink to="/admindashboard">
            <span className="icon">
              <GridViewRoundedIcon />
            </span>
            <h4 className="title">Dashboard</h4>
          </NavLink>
          {navArray.map((data, id) => {
            return (
              <li key={id}>
                <NavLink exact to={data.link}>
                  <span className="icon">{data.icon}</span>
                  <h4 className="title">{data.nav}</h4>
                </NavLink>
              </li>
            );
          })}
          <li>
            {/* <span className='icon'> */}

            {/* </span> */}
            <button type="button" className="btn admin_track" onClick={handleShow}>
              <ShareLocationIcon className='mr-3' />
              Track Order
            </button>
            <Modal show={show} sx={style} centered>
              <Modal.Header style={{ padding: "0px", borderBottom: "0px" }}>
                <button type="button" className="close ml-auto mr-0" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={orderStatus}>
                  <p className="package_text mb-3">Track Your Order Here</p>
                  <div className="form-group">
                    <label htmlFor="#ordeR_id" >Order Id</label>
                    <input
                      name="order_id"
                      size='small'
                      type="text"
                      placeholder="Enter Order Id"
                      required
                      value={data.order_id}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {/* <p className="ship_text">Get a free pickup from the comfort of your home</p> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="#selectuser" >Order Type</label>
                    <select id="selectuser" disabled value={data.order_type} name='order_type' className="form-control"
                      required type='Select' onChange={handleInput}>
                      <option value="ALPHA" >Alpha Order</option>
                    </select>
                  </div>
                  <div className="d-block w-100">
                    <button className="track_btn" type="submit"><span>Track Order </span></button>
                  </div>
                </form>

                {
                  newOrder.length > 0 ?
                    <>
                      <p className="order_status_text">Your Order Status </p>
                      <Stack sx={{ width: '100%', marginTop: '1rem' }} spacing={3}>
                        <Stepper alternativeLabel activeStep={10} style={{ width: '100%', margin: 'auto' }} connector={<QontoConnector />}>
                          {newOrder.map((label, id) => (
                            <Step style={{ width: '30px' }} key={id}>
                              <StepLabel style={{ fontSize: '0.7rem' }} StepIconComponent={AdjustIcon}>{label.status}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Stack>
                    </>
                    :
                    <>
                      <h3 className='text-center mt-3'>No Order Found for this Order Id</h3>
                    </>

                }

              </Modal.Body>
            </Modal>
          </li>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar