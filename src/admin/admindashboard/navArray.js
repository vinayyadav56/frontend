import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import HubIcon from '@mui/icons-material/Hub';
const navArray = [
    {
        nav: 'New Order',
        icon: <BorderColorRoundedIcon />,
        link: '/all-order'
    },
    {
        nav: 'User Availability',
        icon: <StarBorderRoundedIcon />,
        link: '/user-availability'
    },
    {
        nav: 'CK Order Create',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboardckordercreate'
    },
    {
        nav: 'CK Order List',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboardckorder'
    },
    {
        nav: 'Agents',
        icon: <HelpCenterRoundedIcon />,
        link: '/admindashboarddeliverypartnerdetails'
    },
    {
        nav: 'Hub',
        icon: <HubIcon />,
        link: '/admindashboardhub'
    },
    {
        nav: 'Setting',
        icon: <SettingsIcon />,
        link: '/admin/dashboard'
    },



]
export default navArray;
