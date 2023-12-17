import React from "react";
import { Container, Col, Row, Form, Navbar } from "react-bootstrap";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux';
import {MovieAction,MovieSearch} from "../redux/action/MovieAction"
const NavBar = () => {

  const onSearch = (word) => {
    search(word)
  }
  const dispatch=useDispatch()
  const search = async (word) => {
    if (word === "") {
      dispatch(MovieAction())
    } else {
      dispatch(MovieSearch(word))
      
    }
  }
  return (
    <Navbar className="nav-style  fixed-top"  expand="lg">
    <Container >
      <Navbar.Brand href="#"><a href="/">
            <img className="logo" src={logo} alt="dfs" />
          </a></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        
        <Form className="d-flex">
        <div className="search me-4 w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
