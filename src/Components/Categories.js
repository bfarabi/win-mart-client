import React from 'react';

import styled from "styled-components";
import { categories } from '../Data';
import CategoryItem from './CategoryItem';
import { mobile } from './../Responsive';

const Categories = () => {
    const Container = styled.div`
    display: flex;
    padding: 20px;
    
    justify-content:space-between;
    ${mobile({padding: "0px ", flexDirection: "column", height:"100%"})}
    
    `
    const Heading = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    
    `
    return (
        <>
        <Heading>categories</Heading>
        <Container>
        
            {categories.map(item => (<CategoryItem item={item} key={item.id} />))}
        </Container>
        </>
    );
};

export default Categories;