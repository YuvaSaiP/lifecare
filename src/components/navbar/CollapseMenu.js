import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/" onClick={props.handleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              About Us
            </a>
          </li>
          <CallButton style={{ color: "white" }} className="call-btn">
            Sign Up
          </CallButton>
          <CallButton
            style={{
              color: "#003A52",
              background: "white",
              border: "2px solid #003A52",
            }}
            className="call-btn"
          >
            Log in
          </CallButton>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #ffffff;
  position: fixed;
  top: 3.8rem;
  display: flex;
  z-index: 999;
  justify-content: center;
  text-align: center;
  left: 0;
  right: 0;
  /* box-shadow: 0px 1px 8px #CCD6F6; */
  border-bottom: 1px solid #ccd6f6;
`;
const CallButton = styled.a`
  padding: 6px 10px;
  border-radius: 4px;
  background: var(--primary-color);
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1rem;
    line-height: 2;
    color: var(--primary-color);
    /* color: #0A192F; */
    margin: 20px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      /* color: #2DBBC4; */
      color: var(--brand-color);
    }
  }
`;
