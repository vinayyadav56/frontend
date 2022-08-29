import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
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
const partnerArray = [
    {
        id: 1,
        navitem: 'Dashboard',
        icon: <GridViewRoundedIcon />,
        link: '/admindashboard'
    },
    {
        id: 2,
        navitem: 'Order',
        icon: <StarBorderRoundedIcon />,
        link: '/admindashboard'
    },
    {
        id: 3,
        navitem: 'Recent Order',
        icon: <BorderColorRoundedIcon />,
        link: '/admindashboard'
    },
    {
        id: 4,
        navitem: 'Setting',
        icon: <SettingsIcon />,
        link: '/admindashboard'
    },
    {
        id: 5,
        navitem: 'Help Center',
        icon: <HelpCenterRoundedIcon />,
        link: '/admindashboard'
    },


]
export default partnerArray;