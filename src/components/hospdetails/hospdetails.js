import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { Button, Alert } from "react-bootstrap";
SwiperCore.use([Autoplay, Keyboard]);
const swiperSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        style={{ zIndex: "-999" }}
        onSlideChange={() => console.log("slide change")}
        autoplay={true}
        keyboard={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlidesWrapper>
            <EachSlide src="https://images.unsplash.com/photo-1516721306533-364eee523197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          </SlidesWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SlidesWrapper>
            <EachSlide
              width="100px"
              src="https://images.unsplash.com/photo-1516721306533-364eee523197?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
          </SlidesWrapper>
        </SwiperSlide>
      </Swiper>
      <div className="site-wrapper">
        <div style={{ marginTop: "40px" }}></div>
        <Button style={{ marginRight: "40px" }} variant="success">
          Add Review
        </Button>
        <Button variant="info">Get Directions</Button>
        <div style={{ marginTop: "32px" }}></div>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            You can provide the alert messages here, just to notify the user
            about something.
          </p>
        </Alert>
        <div style={{ marginTop: "32px" }}></div>
        <Button style={{ marginRight: "40px" }} variant="info">
          4.5{" "}
          <span role="img" aria-label="">
            ⭐
          </span>{" "}
          stars
        </Button>
        <span>127 Reviews</span>
        <div style={{ marginTop: "32px" }}></div>
        {/* wrapper */}
        <FlexWrapper>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Amenities</h3>
            <p>
              <ul type="disc">
                <li>
                  <h6>Free Health Checkup</h6>
                </li>
                <li>
                  <h6>24 x 7 Ambulance</h6>
                </li>
                <li>
                  <h6>Online Bed Booking</h6>
                </li>
                <li>
                  <h6>COVID Test</h6>
                </li>
                <li>
                  <h6>Other Features</h6>
                </li>
              </ul>
            </p>
            <div style={{ marginTop: "32px" }}></div>
            <h3 style={{ fontWeight: "bold" }}>Live Status from SVIMS</h3>
            <ul type="circle">
              <li>
                <h5>No. of available beds : 30/120</h5>
              </li>
              <li>
                <h5>Availble Doctors Count : 45/70</h5>
              </li>
              <li>
                <h5>Ambulance count status : 11/12</h5>
              </li>
              <li>
                <h5>Oxygen Status : 500.2L/1200.0L</h5>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
            }}
          >
            <div>
              <Button style={{ marginBottom: "10px" }} variant="success">
                Request Ambulance
              </Button>
            </div>
            <div>
              <Button style={{ marginBottom: "10px" }} variant="success">
                Book Appointment
              </Button>
            </div>
            <div>
              <Button style={{ marginBottom: "10px" }} variant="success">
                Order Medicines
              </Button>
            </div>
          </div>
        </FlexWrapper>
      </div>
    </div>
  );
};

const SlidesWrapper = styled.div`
  /* padding-top: 4rem; */
`;

const EachSlide = styled.img`
  width: 100%;
  height: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default swiperSlider;
