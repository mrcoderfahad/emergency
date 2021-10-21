import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg-2.jpg";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Course from "./../course/Course.js";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useCourses from "../../hooks/useCourses.js";

const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
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
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="warning"
                >
                  View services
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Featured Services</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
            Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
            </p>
          </Slide>
          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
