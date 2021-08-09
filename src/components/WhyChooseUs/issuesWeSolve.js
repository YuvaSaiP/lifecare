import React from "react";
import styled from "styled-components";
import { container, item } from "../framer-animations";
import { motion, AnimateSharedLayout } from "framer-motion";
export default function issuesWeSolve() {
  var issues = [
    {
      issueName: "Bed Bookings",
      img: "https://image.flaticon.com/icons/png/512/3027/3027695.png",
      width: 34,
    },
    {
      issueName: "Ambulance",
      img: "https://image.flaticon.com/icons/png/512/3168/3168814.png",
      width: 35,
    },
    {
      issueName: "Vaccines",
      img: "https://image.flaticon.com/icons/png/512/3027/3027695.png",
      width: 35,
    },
    {
      issueName: "Consultation",
      img: "https://image.flaticon.com/icons/png/512/3168/3168814.png",
      width: 35,
    },
  ];
  return (
    <div>
      <Header>Services We Provide</Header>
      <Description>
        Apart from the below list we provide other services like bed bookings, vaccination.
      </Description>
      <AnimateSharedLayout>
        <AllIssuesWrapper
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {issues.map((eachIssue) => {
            return (
              <EachIssue
                key={eachIssue.issueName}
                variants={item} 
                whileHover={{ scale: 1.05 }}
              >
                <img
                  style={{ marginRight: "20px" }}
                  src={eachIssue.img}
                  alt=""
                  width={eachIssue.width}
                />
                <IssueTitle>{eachIssue.issueName}</IssueTitle>
              </EachIssue>
            );
          })}
        </AllIssuesWrapper>
      </AnimateSharedLayout>
    </div>
  );
}

const AllIssuesWrapper = styled(motion.div)`
  max-width: 700x;
  display: grid;
  margin: 0 auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;
const Header = styled(motion.h2)`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  margin: 50px 0px 6px 0px;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin: 25px 0px 12px 0px;
  }
`;
const EachIssue = styled(motion.div)`
  display: flex;
  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.45);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.45);
  background: #fff;
  padding: 10px 0px 10px 8px;
  align-items: center;
  border: 1px solid rgba(204, 214, 246);
  border-left: 3px solid #23D48B;

  border-radius: 10px;
`;

const IssueTitle = styled(motion.p)`
  font-size: 1.2rem;
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
`;

const Description = styled(motion.p)`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
