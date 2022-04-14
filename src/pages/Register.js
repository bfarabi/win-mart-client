import React from 'react';
import styled from 'styled-components';
import { mobile } from './../Responsive';
import Navbar from './../Components/Navbar';

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
width: 40%;
padding: 20px;
background-color: lightgrey;
border-radius: 10px;
${mobile({width: "75%"})}
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Title = styled.div`
font-size: 24px;
font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px; 
background: coral;
font-weight:bold;
color: white;
border-radius: 10px;
`

const Register = () => {
    return (
        <>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="Name " />
                    <Input placeholder="Last Name " />
                    <Input placeholder="User Name " />
                    <Input placeholder="Email " />
                    <Input placeholder="Password " />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>

            </Wrapper>
        </Container>
        </>
    );
};

export default Register;