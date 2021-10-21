import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO MEDICARE HOSPITAL
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
              To better serve the wide-ranging needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, “bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery..
              </p>
              <p className="text-muted">
              Patients arrive at the facility for short appointments. They may also stay for treatment in surgical or medical units for part of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                To become the largest online learning ecosystem for continuing
                education, in partnership with corporates and academia.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. Thus, people in these countries do not always receive the benefits of modern medicine, public health measures, or hospital care, and they generally have lower life expectancies.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                !Be the first to know about news and updates!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
