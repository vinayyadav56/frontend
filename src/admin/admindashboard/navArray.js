import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import HubIcon from '@mui/icons-material/Hub';
const navArray = [
    {
        id: 1,
        nav: 'User Availability',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboardorder'
    },
    {
        id: 2,
        nav: 'CK Order',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboardckorder'
    },
    {
        id: 2,
        nav: 'Order',
        icon: <BorderColorRoundedIcon />,
        link: '/admindashboardallorder'
    },
    {
        id: 3,
        nav: 'Agents',
        icon: <HelpCenterRoundedIcon />,
        link: '/admindashboarddeliverypartnerdetails'
    },
    {
        id: 4,
        nav: 'Hub',
        icon: <HubIcon />,
        link: '/admindashboardhub'
    },
    {
        id: 5,
        nav: 'Setting',
        icon: <SettingsIcon />,
        link: '/admin/dashboard'
    },
 


]
export default navArray;