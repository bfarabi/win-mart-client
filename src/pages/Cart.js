import React from "react";
import styled from "styled-components";
import Navbar from "./../Components/Navbar";
import Announcement from "./../Components/Announcement";
import Footer from "./../Components/Footer";
import { Add } from '@mui/icons-material';
import { Remove } from '@mui/icons-material';
import { mobile } from './../Responsive';


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`

${mobile({display: "none"})}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: " column"})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: " column"})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  
  
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
 
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: " 5px 15px"})}
`;
const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: "20px"})}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 65vh;
`;
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem= styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color:teal;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2) </TopText>
            <TopText> Your wishlist(0) </TopText>
          </TopTexts>
          <TopButton type="filled">checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
          <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/9909123/pexels-photo-9909123.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Jessie thunder shoes
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 12345689083
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 37.5{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>
                          2
                      </ProductAmount>
                      <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/9909123/pexels-photo-9909123.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 12345689083
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>
                          2
                      </ProductAmount>
                      <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            
            
          </Info>
          <Summary> 
          
          <SummaryTitle>Order summary</SummaryTitle>
          <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
            <Button>Checkout</Button>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
