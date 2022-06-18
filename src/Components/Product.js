import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Product2 from './../pages/Product2';


const Info = styled.div`
 opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border: 1px solid lightgray;
 border-radius: 10px;

  &:hover ${Info} {
      opacity:1;
  }
`;
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
    transition: all 0.5s ease;
  &:hover{
background-color: #e9f5f5;
transform:scale(1.1);
  }

`;

const Product = ({ item }) => {
  return (
    <>
      

      
    <Container>
   
    
      <Image src={item.img} />
      <Link to={`/product/${item._id}`}>
      <Info>
      
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      </Link>
     
    </Container>

    
    
    </>
  );
};

export default Product;
