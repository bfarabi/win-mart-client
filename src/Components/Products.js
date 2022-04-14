import {React, useState} from "react";
import styled from "styled-components";
import { popularProduct } from "../Data";
import Product from "./Product";

const Products = ({cat, filter, sort}) => {

  console.log(cat, filter, sort)
  const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <Container>
      {popularProduct.map((item) => (
        <Product item={item} key={item.id} ></Product>
      ))}
    </Container>
  );
};

export default Products;
