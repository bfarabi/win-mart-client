import { React, useState } from "react";
import styled from "styled-components";
import { mobile } from "./../Responsive";
import Navbar from "./../Components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from './../redux/apiCalls';
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
  width: 40%;
  padding: 20px;
  background-color: lightgrey;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
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
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: coral;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  
`;
const LinkText = styled.a`
  ${'' /* margin: 5px 0px; */}
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: blue;
  text-transform: uppercase;
  font-weight: bold;
`;
const Hr = styled.hr`
 margin-top: 10px;
`;
const Error = styled.span`
color: red;

margin-top: 5px;

border-radius:5px;
padding:3px;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, {username, email, password})
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name " />
            <Input
            onChange={(e) => setEmail(e.target.value)}
             placeholder="Email " />
            <Input
            onChange={(e) => setPassword(e.target.value)}
             placeholder="Password " />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>Privacy Policy</b>
            </Agreement>
            <Button onClick={handleClick}  >CREATE</Button>
            {/* {error && <Error>Somethings went wrong...</Error>} */}
            <Hr/>
            <LinkText>
              <Link to="/login">Already have an account?</Link>
            </LinkText>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
