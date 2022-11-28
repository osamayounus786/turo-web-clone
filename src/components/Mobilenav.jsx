
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaCar, FaUserCircle } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineInsurance } from "react-icons/ai";
import { BsTools, BsFillCalculatorFill } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import "../custom.css";

const Mobilenav = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 d-sm-none"
        >
          <Container fluid>
            <img width="100px" src={logo} alt="" />
            <div className="d-flex align-items-center">
              <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              </div>
              <div>
              <FaUserCircle className="text-secondary mob_user_icon" />
              </div>
             
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img width="100px" src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="my-2" href="#action1">
                    Login
                  </Nav.Link>
                  <Nav.Link className="mb-2" href="#action2">
                    Signup
                  </Nav.Link>
                  <Nav />
                  <div className="d-flex align-items-center mb-2">
                    <FaCar className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Become a Host</Nav.Link>
                  </div>

                  <hr className="w-100" />

                  <div className="d-flex align-items-center mb-2">
                    <GiHouseKeys className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; How Turo Works</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BiSupport className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Contact Support</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IoNewspaperOutline className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Legal</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <AiOutlineInsurance className="fs-5" />
                    <Nav.Link href="#action2">
                      &nbsp; Insurance and Protection
                    </Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BsTools className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Host tools</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BsFillCalculatorFill className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Calculator</Nav.Link>
                  </div>

             
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Mobilenav;
