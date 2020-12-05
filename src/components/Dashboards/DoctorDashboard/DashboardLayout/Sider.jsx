import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Layout.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DescriptionIcon from '@material-ui/icons/Description';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import HelpIcon from '@material-ui/icons/Help';

function Sider() {

    const collapsed = useSelector(state => state.collapsed.collapsed)

    return (
        <div className = {collapsed === true ? "sidebar" : "open-sidebar"}>

        <ul className = "sidebar-nav">

        <Link to = "/DoctorDashboard/Home">

        <li><a className = "text-light" href = "#"><HomeIcon/>

        {collapsed === false ? 
        <p className = "sider-contents ml-2">Menu</p>
        : null}
        
        </a></li>

        </Link>

        <br/>

        <Link to = "/DoctorDashboard/Profile">

        <li><a className = "text-light" href = "#"><PersonIcon/>
        
        {collapsed === false ? 
        <p className = "sider-contents ml-2">Profile</p>
        : null}

        </a></li>

        </Link>

        <br/>

        <Link to = "/DoctorDashboard/Bookings">

        <li><a className = "text-light" href = "#"><ScheduleIcon/>
        
        {collapsed === false ? 
        <p className = "sider-contents ml-2">Bookings</p>
        : null}

        </a></li>

        </Link>

        <br/>

        <Link to = "/DoctorDashboard/Prescriptions">

        <li><a className = "text-light" href = "#"><DescriptionIcon/>
        
        {collapsed === false ? 
        <p className = "sider-contents ml-2">Prescriptions</p>
        : null}

        </a></li>

        </Link>

        <br/>

        <Link to = "DoctorDashboard/Transactions">

        <li><a className = "text-light" href = "#"><ImportExportIcon/>

        {collapsed === false ? 
        <p className = "sider-contents ml-2">Transactions</p>
        : null}

        </a></li>

        </Link>

        <br/>

        <Link to = "DoctorDashboard/ContactUs">

        <li><a className = "text-light" href = "#"><HelpIcon/>
        
        {collapsed === false ? 
        <p className = "sider-contents ml-2">Contact us</p>
        : null}

        </a></li>

        </Link>

        </ul>
           
        </div> 
    )
};

export default Sider;
