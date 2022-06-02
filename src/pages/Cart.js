import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./../Components/Navbar";
import Announcement from "./../Components/Announcement";
import Footer from "./../Components/Footer";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { mobile, tab } from "./../Responsive";
import { useSelector } from "react-redux";
import Pay from "./Pay";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import { publicRequest } from "./../requestMethod";
import { userLogout } from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 1rem;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "skyblue" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${tab({ flexDirection: " column-reverse" })}
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative;
  ${tab({ flexDirection: " column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: inherit;
  justify-content: center;
  ${mobile({ flexDirection: " column", alignItems: "center" })}
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
  border: 1px solid gray;
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
  ${mobile({ margin: " 5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  width: 30%;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin-left: 0.5rem;
  margin-bottom: 10px;
  ${tab({ width: " 50%", margin: "auto", marginBottom: "5px" })}
  ${"" /* height: 65vh; */}
`;
// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.div`
  ${
    "" /* width: 100%;
height: 25%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600; */
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.products);

  const quantity = useSelector((state) => state.cart.quantity);
  // const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch();
  // const [product, setProduct] = useState({});

 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity}) </TopText>
            <TopText> Your wishlist(0) </TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => dispatch(userLogout())}>
            {" "}
            Delete Products
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {quantity? (cart.products.map((product) => ( 
              <>
              
                <Product>
                  <CancelIcon
                    style={{
                      fontSize: "2rem",
                      color: "red",
                      cursor: "pointer",
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                    }}
                  />
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size: </b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                {/* <Hr /> */}
              </>
            ))): (<p style={{fontSize:"2rem", margin:"3rem", textAlign:"center"}} >product Empty!</p>)}
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Pay />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
