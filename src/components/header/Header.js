import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap/Button";
import Continer from "react-bootstrap/Continer";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


const Header () => {

return (

        <Navbar bg = "dark" variant= "dark" expand="lg">
            <Continer fluid>

                <Navbar.Brand href="/" style={{"color": 'gold'}} >

                    <FontAwesomeIcon icon = {faVieoSlash}/> Gold
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse if="navbarScroll">
                
                    <Nav
                        className = "me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>  
                        <NavLink className="nav-link" to="/watchlist">Home</NavLink>   
                    </Nav>
                    <Button variant="outline-info" className="me-2" Login></Button>
                    <Button variant="outline-info"  Register></Button>
                </Navbar.Collapse>

            </Continer>

        </Navbar>
  )
}

export default Header 