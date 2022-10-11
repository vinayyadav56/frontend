import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
const navArray = [
    {
        id: 1,
        nav: 'Order',
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
        nav: 'Recent Order',
        icon: <BorderColorRoundedIcon />,
        link: '/admin/dashboard'
    },
    {
        id: 3,
        nav: 'Delivery Partner',
        icon: <HelpCenterRoundedIcon />,
        link: '/admindashboarddeliverypartnerdetails'
    },
    {
        id: 4,
        nav: 'Setting',
        icon: <SettingsIcon />,
        link: '/admin/dashboard'
    },
 


]
export default navArray;