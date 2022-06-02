import { React, useState } from "react";
import styled from "styled-components";
import { mobile } from "./../Responsive";
import Navbar from "./../Components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from './../redux/apiCalls';
import { useSelector } from 'react-redux';

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.pexels.com/photos/9909123/pexels-photo-9909123.jpeg")
      center;
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
  ${mobile({ width: "70%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background: coral;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:disabled{
      color: green;
      cursor: not-allowed;
  }
`;
const LinkText = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: blue;
  text-transform: uppercase;
  font-weight: bold;
`;
const Error = styled.span`
color: gray;
`
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  
  
  

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password })
  };
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="User Name "
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="Password "
            //   type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Error>(use Demo:- username: Billal, password: billal100)</Error>
            <Button onClick={handleClick} >LOGIN</Button>
       
            {/* {error && <Error>Somethings went wrong...</Error>} */}
            <LinkText>forgot password?</LinkText>
            <LinkText>
              <Link to="/register">create a new account</Link>
            </LinkText>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
