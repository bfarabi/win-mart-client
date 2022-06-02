import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile, tab } from './../Responsive';

const Container = styled.div`
  display: flex;
  background-color:lightgray;
  ${mobile({flexDirection: "column"})}
  ${tab({flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 10px;
`
const Payment = styled.img`

`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 20px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 10px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Win Mart</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          maiores rerum earum nihil laboriosam aliquid fuga! Totam, recusandae.
          Doloremque placeat ullam iste vel ipsa ratione quod id, mollitia
          voluptates sunt!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title> Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Policy</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <Room/> 1212 Dhaka, Bangladesh. 
          </ContactItem>
          <ContactItem>
              <Phone/> +880 1354 345 345
          </ContactItem>
          <ContactItem>
              <MailOutline/> Contact@win-mart.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
