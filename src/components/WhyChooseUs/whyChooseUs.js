import React from "react";
import styled from "styled-components";
import "../Products/hello.css";
export default function whyChooseUs() {
  return (
    <div>
      <Header>Best Mobile Repair Service</Header>
      <ContainerWrapper>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1252/1252390.svg"
              alt=""
              width="60px"
            />
          </IconWrapper>
          <HeadingText>Original & Quality Parts</HeadingText>
          <Description>
            We have our own trained, professional & experienced technician.
            Which make you comfortable to hand over your gadget to our
            technician.
          </Description>
        </EachItem>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3565/3565874.svg"
              alt=""
              width="70px"
            />
          </IconWrapper>
          <HeadingText>Trusted Service</HeadingText>
          <Description>
            It provides opportunities for everyone to enjoy lowest and
            affordable price which helps save your money upto 50%. Hurry Up!
            Book Now
          </Description>
        </EachItem>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3604/3604032.svg"
              alt=""
              width="70px"
            />
          </IconWrapper>
          <HeadingText>Lowest & Affordable Pricing</HeadingText>
          <Description>
            We have our own trained, professional & experienced technician.
            Which make you comfortable to hand over your gadget to our
            technician.
          </Description>
        </EachItem>
      </ContainerWrapper>
    </div>
  );
}

const HeadingText = styled.h3`
  padding: 10px 0px;
  font-family: "Tajawal", sans-serif;
`;

const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); */
`;

const EachItem = styled.div`
  background: white;
  padding: 25px 20px;
  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.64);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.64);
  border-radius: 10px;
  border: 1px solid rgba(204, 214, 246);
  overflow-wrap: break-word;
  flex-direction: column;
  justify-self: auto;
`;
const Header = styled.h2`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  margin: 50px 0px 14px 0px;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin: 25px 0px 12px 0px;
  }
`;

const IconWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: var(--brand-color);
`;

const Description = styled.p`
  word-wrap: break-word;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: var(--des-text);
  /* font-weight:500; */
`;
