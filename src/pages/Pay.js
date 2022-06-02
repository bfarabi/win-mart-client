import axios from "axios";
import { React, useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userRequest } from "./../requestMethod";
import logo from "../assets/win-mart.jpg";
import { userLogout } from "../redux/cartRedux";
import { useDispatch } from 'react-redux';

const KEY =
  "pk_test_51JNE43Ha7i8rpUJKvjK4oHfig0Rj4eGaqIrVSI7rqQv2ZFv0xS8TUj6ojKeTSZwGUIntwdRJKCANnIKbrOA2bUTG009h19Lu6l";
const Pay = () => {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount:cart.total * 100,
          }
        );
        // console.log(res.data);

        dispatch(userLogout()) && navigate('/success', {data : res.data});
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total]);
  
// console.log(stripeToken)
  return (
    <div
      style={{
        // height: "5rem",
        margin:"auto"
        // justifyContent: "center",
      }}
    >
    {stripeToken ? ( <span >Processing. Please wait...</span> ) : (

    
      <StripeCheckout
        name="win mart"
        image={logo}
        description={`total is $ ${cart.total}`}
        shippingAddress
        billingAddress
        amount={cart.total * 100}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: "100%",
            borderRadius: 5,
            padding: "10px",
            backgroundColor: "teal",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          checkout Now
        </button>
      </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
