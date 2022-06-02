import { React, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile, tab } from "./../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/win-mart.jpg";
import { useDispatch } from 'react-redux';
import { login } from './../redux/apiCalls';
import { logout } from "../redux/userRedux";
import { userLogout } from "../redux/cartRedux";


const Container = styled.div`
  ${"" /* height: 60px; */}
  ${"" /* ${mobile({height: "50px"})} */}
`;
const Wrapper = styled.div`
  ${"" /* padding: 20px 20px; */}
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${"" /* ${mobile({padding: "5px 0px"})} */}
  ${mobile({ padding: "5px 0px", flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 2, justifyContent: "start" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem;

  ${mobile({ width: "50px" })}
`;
const Image = styled.img`
  width: 200px;

  ${mobile({ width: "120px" })}
  ${tab({ width: "160px" })}
`;
const MenuItem = styled.div`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.3rem;
  ${"" /* transition: all 1s ease; */}
  ${mobile({ fontSize: "6px", marginLeft: "7px" })}
    // ${tab({ fontSize: "0.8rem", marginLeft: "12px" })}
    &:hover {
    text-decoration: underline;
  }
`;
const Navbar = () => {
  const dispatch = useDispatch();
  
  const LoggedInUser = useSelector((state) => state.user.currentUser);
  const userName = useSelector((state) => state.user.currentUser?.username);
  const quantity = useSelector((state) => state.cart.quantity);
 

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(userLogout());
    

  };
 
  return (
    <Container>
      <Wrapper>
        
        <Center>
        <Link to="/"> <Image src={logo} /></Link>
          
        </Center>
        <Right>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <MenuItem> HOME</MenuItem>
          </Link>

          {LoggedInUser ? (
            <MenuItem onClick={handleLogout} style={{cursor: "pointer" }} > LOG OUT </MenuItem>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <MenuItem> SIGN IN</MenuItem>{" "}
            </Link>
          )}
          {userName? (<MenuItem> {userName} </MenuItem>) : (<Link style={{ textDecoration: "none" }} to="/register">
                <MenuItem> REGISTER</MenuItem>
          </Link>) }
          
          <Link style={{ textDecoration: "none" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
