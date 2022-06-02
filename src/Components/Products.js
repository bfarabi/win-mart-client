import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { popularProduct } from "../Data";
import Product from "./Product";
import { axios } from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {CircularProgress} from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
    
`;
const SearchContainer = styled.div`
  ${"" /* border: 1px solid lightgray; */}
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 7px 0px;
  background: lightgray;
`;

const CircleContainer = styled.div`
  

  padding: 50px 0px;
  margin: auto;
  
  
`;
const Input = styled.input`
  border: 2px solid teal;
  padding: 0.5rem;
  width: 50%;
  border-radius: 5px;
  margin-left: 7px;
`;
const Heading = styled.h1`
text-transform: uppercase;
font-weight: 700;
text-align: center;
padding-top: 20px;
`;

const Products = ({ cat, filter, sort }) => {
  // console.log(cat, filter, sort);

  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(
      cat
        ? `https://stormy-tundra-69275.herokuapp.com/api/products?category=${cat}`
        : "https://stormy-tundra-69275.herokuapp.com/api/products"
    )
      .then((response) => response.json())

      .then((data) => {setProducts(data);
        setDisplayProducts(data);
      });
  }, [cat]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `https://stormy-tundra-69275.herokuapp.com/api/products?category=${cat}`
  //           : "https://stormy-tundra-69275.herokuapp.com/api/products"
  //       );
  //       setProducts(res.data);
  //     } catch (err) {}
  //   };
  //   getProducts();
  // }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        Array.isArray(products)? products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        ):[]
      );
  }, [cat, filter, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    const searchText = e.target.value;
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    
    setDisplayProducts(matchedProducts);
  };

  return (
    <>
    <Heading>all products</Heading>
      <SearchContainer>
        <SearchIcon
          style={{
            color: "gray",
            fontSize: 24,
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        />
        <Input onChange={handleSearch} placeholder="Search with (t-shirt, shirt, jacket, man, kids, color name etc) " />
      </SearchContainer>
      <Container>
        {cat ? (
          filteredProducts.map((item) => (
            <Product item={item} key={item.id}>
              
            </Product>
          ))
        ) :
        
        displayProducts.length ? (
          displayProducts
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)
        ) :
        
         (
         <CircleContainer>
           <CircularProgress   />
           </CircleContainer>
          
        )}
      </Container>
    </>
  );
};

export default Products;
