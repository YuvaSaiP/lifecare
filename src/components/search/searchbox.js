import React from "react";
import { InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";

function searchbox({title}) {
  return (
    <div>
      <AllSearchBoxWrapper>
        <InputGroup className="mb-1">
          <FormControl
            placeholder="Search For Hospital"
            aria-label="Search For Hospital"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <img
              src="https://image.flaticon.com/icons/png/512/1296/1296902.png"
              alt="search icon"
              srcset=""
              width="20"
            />
          </Button>
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl
            placeholder="Try another place"
            aria-label="Try another place"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <img
              
              src="https://image.flaticon.com/icons/png/512/5376/5376211.png"
              alt="location icon"
              srcset=""
              width="22"
            />
          </Button>
        </InputGroup>
        <Header>{title}</Header>
        {/* <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Rating</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Quick Service</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </AllSearchBoxWrapper>
    </div>
  );
}

const AllSearchBoxWrapper = styled.div`
  max-width: 700x;
  z-index: -999;
  display: grid;
  margin: 0 auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;
const Header = styled.h2`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
export default searchbox;
