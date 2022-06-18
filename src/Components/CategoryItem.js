import React from 'react';
import  styled from 'styled-components';
import { mobile } from './../Responsive';
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
    const Container = styled.div`
    flex: 1;
    margin: 1.5rem;
    padding:1.5rem;
    border: 1px solid lightgray;
    box-shadow: 7px 7px 6px darkgrey;
    border-radius:10px;
    text-align: center;
    transition: 0.8s ease;

    &:hover {
       transform:scale(1.05)
    }
   
    
   
  
    
    `
    const Image = styled.img`
    width: 80%;
    height: 20rem;
    ${'' /* object-fit:cover; */}
    border-radius:10px;
    padding: 5px;
    
    
    
    `
    const Info = styled.div`
    // position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    `
    const Title = styled.h1`
    text-transform: uppercase;
    ${'' /* color: white; */}
    font-size: 2rem;
    `
    const Button = styled.button`
    text-transform: uppercase;
    border: none;
    padding: 10px;
    background-color:coral;
    color: white;
    font-weight: 600;
    cursor: pointer;
    `
    return (
        <Container>
        <Link to={`/products/${item.cat}`}>
           <Image src={item.img}></Image>
           <Info>
               <Title>{item.title}</Title>
               <Button>Shop now</Button>
           </Info>
           </Link>
        </Container>
    );
};

export default CategoryItem;