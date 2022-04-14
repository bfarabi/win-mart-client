import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from './../Responsive';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
  `;
  const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2,justifyContent: "start"})}
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 20px;
  `;
  const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
  `;
  const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "15px "})}
  `;
  const MenuItem = styled.div`
    
    font-size: 1.1rem;
    font-weight:bold;
    cursor: pointer;
    margin-left: 25px;
    ${'' /* transition: all 1s ease; */}
    ${mobile({fontSize: "10px", marginLeft: "10px"})}
    &:hover{
      text-decoration: underline;
      
    }
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Logo>Win Mart </Logo>{" "}
        </Center>
        <Right>
        <Link style={{textDecoration: "none"}} to="/"> <MenuItem> HOME</MenuItem></Link>
        <Link style={{textDecoration: "none"}} to="/login"> <MenuItem> SIGN IN</MenuItem></Link>
        <Link style={{textDecoration: "none"}} to="/register"> <MenuItem> REGISTER</MenuItem></Link>
          
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
