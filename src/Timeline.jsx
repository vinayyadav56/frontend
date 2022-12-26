import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
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

const steps1 = [
    'CONFIRMED',
    'ASSIGNED_HUB_TO_PICK ',
    'LABEL_GENERATED',
    'PICKUP_ASSIGNED',
    'OUT_FOR_PICKUP',
    'ORDER_PICKED',
    'AT_HUB',
    'ORDER_BAGGED',
];

// const steps2 = [
//     'CARRIER_ASSIGNED',
//     'CARRIER_DELIVERY_AGENT_ASSIGEND',
//     'DELIVERED_TO_CARRIER',
//     'CARRIER_RECEIVED',
//     ' AT_HUB',
//     'ORDER_BAGGED',
//     'CARRIER_ASSIGNED',
//     'CARRIER_RECEIVED',
// ];

export default function TrackingSteppers() {
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={3} style={{width:'100%'}} connector={<QontoConnector />}>
                {steps1.map((label) => (
                    <Step style={{width:'50px'}} key={label}>
                        <StepLabel style={{fontSize:'0.7rem'}} StepIconComponent={AdjustIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
