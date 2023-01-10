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
        link: '/ckordercreate'
    },
    {
        nav: 'CK Order List',
        icon: <StarBorderRoundedIcon />,
        link: '/ckorder'
    },
    {
        nav: 'Agents',
        icon: <HelpCenterRoundedIcon />,
        link: '/delivery/partnerdetails'
    },
    {
        nav: 'Hub',
        icon: <HubIcon />,
        link: '/hub'
    },
    {
        nav: 'Company',
        icon: <SettingsIcon />,
        link: '/companyUsers'
    },



]
export default navArray;
