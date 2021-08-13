import styled from "styled-components";
import React from "react";
import "./hello.css";
import { Link } from "react-router-dom";
export default function hello() {
  return (
    <div>
      <CategoryWrapper>
        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(
      rgba(255, 0, 0, 0.15), 
      rgba(255, 0, 0, 0.15)
    ),url("https://images.unsplash.com/photo-1516721306533-364eee523197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Link to="/details">
              <Button>SVIMS Tirupati</Button>
            </Link>
          </EachItemDiv>
        </EachItemContainer>

        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1587351021821-f871837248c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Button>Johnson Tirupati</Button>
          </EachItemDiv>
        </EachItemContainer>
        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(
      rgba(255, 0, 0, 0.15), 
      rgba(255, 0, 0, 0.15)
    ),url("https://images.unsplash.com/photo-1516721306533-364eee523197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Link to="/details">
              <Button>RUYA Tirupati</Button>
            </Link>
          </EachItemDiv>
        </EachItemContainer>

        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1587351021821-f871837248c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Button>Vasan Eye care</Button>
          </EachItemDiv>
        </EachItemContainer>
        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(
      rgba(255, 0, 0, 0.15), 
      rgba(255, 0, 0, 0.15)
    ),url("https://images.unsplash.com/photo-1516721306533-364eee523197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Button>SVIMS Tirupati</Button>
          </EachItemDiv>
        </EachItemContainer>

        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1587351021821-f871837248c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        >
          <EachItemDiv>
            <Button>RAMA Hospital</Button>
          </EachItemDiv>
        </EachItemContainer>
      </CategoryWrapper>
    </div>
  );
}

const EachItemDiv = styled.div`
  display: flex;
  height: 140px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const CategoryWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 0.8rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); */
`;

const EachItemContainer = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 6px;
  /* border: 1px solid rgba(204, 214, 246); */
  overflow-wrap: break-word;
  flex-direction: column;
  justify-self: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url("");
  background-size: cover;
`;

const Button = styled.button`
  background: transparent;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;
