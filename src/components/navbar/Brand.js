import React from "react";
import styled from "styled-components";


const Brand = () => {
  return (
    <Image
      src="https://leafdesign.in/assets/images/lifecare/Lifecare_03.jpg"
      alt="Company Logo"
    />
  );
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
`;
