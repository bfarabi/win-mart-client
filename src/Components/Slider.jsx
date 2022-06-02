import React, { useState } from "react";
import styled from "styled-components";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { sliderItems } from "./../Data";
import { mobile, tab } from "./../Responsive";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  max-width: 100%;
  overflow:hidden;
  
  ${'' /* height: 100vh; */}
  margin-bottom: 2rem;
  ${"" /* display: flex; */}
  ${"" /* background-color: coral; */}
    
    
    
  
    ${mobile({ height: "55vh " })}
    ${tab({ position: "relative" })}
`;
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  
  ${'' /* height: 100vh; */}
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  ${mobile({ height: "55vh " })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 27rem;
  width: 27rem;
 
  

  ${'' /* ${tab({opacity: "0.5px" })} */}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  
  ${tab({ position: "absolute", background:" linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.6))", width:"24rem" })}
`;
const Title = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  ${tab({fontSize: "3rem" })}
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  ${tab({fontSize: "1rem", width:"8rem" })}
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: coral;
  color: white;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: green;
  }
`;
const Slider = () => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if(direction ==="left"){
  //     setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex +1: 0)
  //   }
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container>
      {/* <Arrow direction="left" onClick={()=> handleClick("left")} >
        <ArrowLeftOutlinedIcon />
      </Arrow> */}

      {/* <Wrapper  > */}

      <Sliders {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id}>
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description} </Description>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          </div>
        ))}
      </Sliders>
      {/*  </Wrapper> */}
      {/* <Arrow direction="right" onClick={()=> handleClick("right")}  >
        <ArrowRightOutlinedIcon />
      </Arrow> */}
    </Container>
  );
};

export default Slider;
