import React from 'react';
import styled from 'styled-components';
import { mobile } from './../Responsive';
import Navbar from './../Components/Navbar';
import { Link } from 'react-router-dom';


const Container = styled.div`

background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url("https://images.pexels.com/photos/9909123/pexels-photo-9909123.jpeg")  center ;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Wrapper = styled.div`
width: 35%;
padding: 20px;
background-color: lightgrey;
border-radius: 10px;
${mobile({width: "70%"})}
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-size: 24px;
font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
border-radius: 10px;

`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px; 
background: coral;
font-weight:bold;
color: white;
margin-bottom: 10px;
border-radius: 10px;
`
const LinkText = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: none;
cursor: pointer;
color: blue;
text-transform: uppercase;
font-weight:bold;

`
const Login = () => {
    return (
        <>
        <Navbar></Navbar>
        <Container>
        
            <Wrapper>
                <Title>
                    SIGN IN
                </Title>
                <Form>
                  <Input placeholder="User Name " />
                   
                    <Input placeholder="Password " />
                    <Button>LOGIN</Button>
                    <LinkText>forgot password?</LinkText>
                    <LinkText ><Link to="/register">create a new account</Link>  </LinkText>
                  
                </Form>

            </Wrapper>
        </Container>
        </>
    );
};

export default Login;