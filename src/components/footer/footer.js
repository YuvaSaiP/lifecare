import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <CopyRights>
        <p>
          Copyright © Sahil Lifecare {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </CopyRights>
    </div>
  );
}

const CopyRights = styled.div`
  border-top: 1px solid #ccd6f62f;
  width: 100%;
  color: #fff;
  padding: 16px 0px;
  background: #33647F;
  font-size: 1rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
