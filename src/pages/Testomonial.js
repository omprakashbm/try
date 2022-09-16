import React from "react";
import { Card } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineStar } from "react-icons/ai";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testomonials.css";

const Testomonial = () => {
  return (
    <div>
      {" "}
      <Row>
        <Col md-6>
          <h1
            className="heading1"
            style={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "black", paddingRight: "10px" }}>
              Testomonials
            </span>
          </h1>
          <p
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
              fontSize: "20px",
            }}
          >
            What people think about our course & products
          </p>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            loop
            navigation
            pagination={{
              dynamicBullets: true,
            }}
          >
            <SwiperSlide className="cards">
              <Card
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <img
                    src=""
                    alt="/"
                    style={{ display: "block", paddingTop: "10px" }}
                  />
                  <h5 style={{ color: "black", paddingTop: "10px" }}>Name</h5>
                </div>
                <spam style={{ display: "flex", paddingLeft: "10px" }}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </spam>

                <p style={{ color: "black", paddingLeft: "10px" }}>
                  what he thinks
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="cards">
              <Card
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <img
                    src=""
                    alt="/"
                    style={{ display: "block", paddingTop: "10px" }}
                  />
                  <h5 style={{ color: "black", paddingTop: "10px" }}>Name</h5>
                </div>
                <spam style={{ display: "flex", paddingLeft: "10px" }}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </spam>

                <p style={{ color: "black", paddingLeft: "10px" }}>
                  what he thinks
                </p>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="cards">
              <Card
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <img
                    src=""
                    alt="/"
                    style={{ display: "block", paddingTop: "10px" }}
                  />
                  <h5 style={{ color: "black", paddingTop: "10px" }}>Name</h5>
                </div>
                <spam style={{ display: "flex", paddingLeft: "10px" }}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </spam>

                <p style={{ color: "black", paddingLeft: "10px" }}>
                  what he thinks
                </p>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="cards">
              <Card
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <img
                    src=""
                    alt="/"
                    style={{ display: "block", paddingTop: "10px" }}
                  />
                  <h5 style={{ color: "black", paddingTop: "10px" }}>Name</h5>
                </div>
                <spam style={{ display: "flex", paddingLeft: "10px" }}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </spam>

                <p style={{ color: "black", paddingLeft: "10px" }}>
                  what he thinks
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default Testomonial;
