import React from "react";
import bgImage from "./../assets/images/sectionBg.png";
import Bg from "./../assets/images/bg-2.jpg";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">MEDICARE HOSPITAL</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                Medicare has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology,
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/courses"
                  className="rounded-pill btn btn-warning fs-5 py-2 px-4"
                >
                  View Services
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="feature"
        className="py-5"
        style={{ background: `url(${bgImage})` }}
      >
        <div className="text-center text-white">
          <Slide left>
            <h1>Our Feature Services</h1>
          </Slide>

          <Slide right>
            <p className="mb-0">
            Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
            </p>
          </Slide>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {courses.slice(0, 6)?.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
