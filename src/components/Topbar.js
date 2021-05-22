import React, { useState } from "react";
import "../App.css";
//import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//import bootstrap components
import { Nav, Navbar } from "react-bootstrap";
import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
} from "reactstrap";

const Topbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [LinearMenu, setLinearMenuOpen] = useState(false);
    const [InterpolationMenu, setInterpolationMenuOpen] = useState(false);
    const RootOfEquationToggle = () => setDropdownOpen((prevState) => !prevState);
    const LinearMenuToggle = () => setLinearMenuOpen((prevState) => !prevState);
    const InterpolationMenuToggle = () => setInterpolationMenuOpen((prevState) => !prevState);

    return ( 
        <div className = "menu ul li">
        <Navbar className = "nav-color" variant = "dark" >
        <Navbar.Brand href = "/" > Home </Navbar.Brand>
        <Nav className = "mr-auto" >
        <Dropdown isOpen = { dropdownOpen }toggle = { RootOfEquationToggle } >
        <DropdownToggle color = "secondary" caret >Root of Equation </DropdownToggle>
        <DropdownMenu>
        <DropdownItem header > Select Topic </DropdownItem>
        <DropdownItem href = "/Bisection" > Bisection Method </DropdownItem> 
        <DropdownItem href = "/FalsePos" > False Position </DropdownItem>
        <DropdownItem href = "/OnePoint" > One - Point Iteration </DropdownItem> 
        <DropdownItem href = "/Secant" > Secant Method </DropdownItem>
        <DropdownItem href = "/NewtonRaphson" > Newton Raphson </DropdownItem> 
        </DropdownMenu>
        </Dropdown> 
        <span> &nbsp; &nbsp; </span> 
        <Dropdown isOpen = { LinearMenu }toggle = { LinearMenuToggle } >
        <DropdownToggle color = "secondary"caret>Linear Algebra </DropdownToggle> 
        <DropdownMenu>
        <DropdownItem header > Select Topic </DropdownItem> 
        <DropdownItem href = "/CramersRule" > Cramer 's Rule</DropdownItem> 
        <DropdownItem href = "/GaussElimination" >Gauss Elimination </DropdownItem> 
        <DropdownItem href = "/GaussJordan" >Gauss - Jordan Elimination  </DropdownItem>
        <DropdownItem href = "/GaussSeidel" >Gauss - Seidel </DropdownItem> 
        <DropdownItem href = "/Jacobi" >Jacobi Iteration </DropdownItem> 
        </DropdownMenu> 
        </Dropdown>
        <span> &nbsp; &nbsp; </span> 
        <Dropdown isOpen = { InterpolationMenu }toggle = { InterpolationMenuToggle } >
        <DropdownToggle color = "secondary"caret>Interpolation </DropdownToggle> 
        <DropdownMenu>
        <DropdownItem header > Select Topic </DropdownItem> 
        <DropdownItem href = "/Newton-Divided-Difference" > NewtonInterpolation</DropdownItem>
        <DropdownItem href = "/Spline" > Spline</DropdownItem> 
        </DropdownMenu> 
        </Dropdown>
        </Nav>
        <Navbar.Brand href="http://localhost:5000/api-docs/">Swagger</Navbar.Brand>
        </Navbar>
        </div>
    );
};

export default Topbar;