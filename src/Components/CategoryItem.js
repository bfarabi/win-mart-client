import React from 'react';
import  styled from 'styled-components';
import { mobile } from './../Responsive';
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
    const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 28rem;
    ${'' /* position: relative; */}
    border: 1px solid lightgray;
    box-shadow:3px 3px 5px gray;
    border-radius:10px;
  
    
    `
    const Image = styled.img`
    width: 100%;
    height: 25rem;
    object-fit:cover;
    border-radius:10px;
    
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
    `
    const Button = styled.button`
    text-transform: uppercase;
    border: none;
    padding: 10px;
    background-color:coral;
    color: white;
    font-weight: 600;
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