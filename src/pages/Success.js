import React from 'react';
import Navbar from "./../Components/Navbar";

const Success = () => {

    return (
      <>
      <Navbar/>
        <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

     <h2
          style={{
            border: "none",
            width: 200,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "600",

          }}
        >
          Paid Successfully!
        </h2>

    </div>
    </>
    );
};

export default Success;


