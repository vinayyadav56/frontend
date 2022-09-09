import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
// show ur hide sidebar
//   const menuBtn = document.querySelector('#menu-btn');
// const closeBtn = document.querySelector('#close-btn');
// const sidebar = document.querySelector('aside');
// menuBtn.addEventListener('click', () => {
//     sidebar.style.display = 'block';
// })
// closeBtn.addEventListener('click', () => {
//     sidebar.style.display = 'none';
// })
const navArray = [
    {
        id: 1,
        nav: 'Order',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboard/order'
    },
    {
        id: 2,
        nav: 'Recent Order',
        icon: <BorderColorRoundedIcon />,
        link: '/admin/dashboard'
    },
    {
        id: 3,
        nav: 'Setting',
        icon: <SettingsIcon />,
        link: '/admin/dashboard'
    },
    {
        id: 4,
        nav: 'Help Center',
        icon: <HelpCenterRoundedIcon />,
        link: '/admin/dashboard'
    },


]
export default navArray;