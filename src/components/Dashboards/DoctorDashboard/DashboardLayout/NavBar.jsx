import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { collapsedState } from '../../../../Actions/siderbarActions';
import './Layout.css';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function NavBar() {

    const classes = useStyles();

    const dipatch = useDispatch()

    const onCollapse = () => dipatch(collapsedState());

    return (

        <div className = "Navbarr">

        <Navbar fixed = "top" className = "nav__color" expand = "sm" variant = "dark">

        <Nav.Link className = "text-light" style = {{marginLeft: "-10px"}}>

        <MenuIcon onClick = {onCollapse}/>

        </Nav.Link>

        <Nav className = "ml-2">

        <AccountCircleIcon className = "text-light" style = {{width: "50px", height: "50px"}}/>
     
        <NavDropdown title = "" className = "mt-1" id="basic-nav-dropdown" variant = "light">

        <Link to = "/DoctorDashboard/Home">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </Link>
        <Link to = "/DoctorDashboard/Profile">
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </Link>
        <Link to = "/Login">
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </Link>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        </Nav>

        <div className = "user__info text-light" style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "10px"}}>
        <p className = "text-light">Mohun Kumar</p>
        <p className = "text-light" style = {{marginTop: "-20px", marginBottom: "0px", fontSize: "12px"}}>UF00QIS43FGFDS</p>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="ml-auto">

        <Form inline className="mr-5">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" aria-label="Search"
        style = {{borderRadius: "30px 30px 30px 30px"}} 
        />

        <Button variant = "outline-light" type="submit">Search</Button>
        </Form>

        <Nav className = "mr-3">
        <Nav.Link href = "notifications.html">

        <div className={classes.root}>

        <Badge badgeContent={1} color="secondary">
        <NotificationsIcon />
        </Badge>

        </div>

       </Nav.Link>
       </Nav>

       <Nav className = "mt-2">
       <Nav.Link className = "text-light" href = "notifications.html">
       315 CAD
       </Nav.Link>
       </Nav>

       </Nav>

       </Navbar.Collapse>

       </Navbar>

       </div>

    );
}

export default NavBar;
