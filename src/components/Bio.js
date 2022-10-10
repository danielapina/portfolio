/* eslint-disable no-restricted-globals */
import React from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

import MessageMe from "./MessageMe";
import Projects from './Projects';
import Technologies from './Technologies';

import Profile from "./assets/PHOTO.jpg";
import "./styles/Bio.css";

const Bio = () => {

  
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#354B45", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={Profile}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <div>
                  <MessageMe />
                  </div>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">
                    Cynthia Daniela Piña Olivares
                  </MDBTypography>
                  <MDBCardText>Frontend Developer</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBBtn
                      tag="a"
                      href="https://github.com/danielapina"
                      target="_blank"
                      color="none"
                      className="m-1"
                      style={{ color: "#000" }}
                    >
                      <MDBIcon fab icon="github" size="2x" />
                    </MDBBtn>
                  </div>
                  <div className="px-3">
                    <MDBBtn
                      tag="a"
                      href="https://www.linkedin.com/in/danielapina-o/"
                      target="_blank"
                      color="none"
                      className="m-1"
                      style={{ color: "#000" }}
                    >
                      <MDBIcon fab icon="linkedin" size="2x" />
                    </MDBBtn>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      {" "}
                      Experience in Web Development using Javascript/CSS/ HTML.
                      <br />
                      Working with REACT.JS and with SCRUM methodology. I am
                      passionate about self-learning, adapting to new
                      challenges, team working and Nature!
                    </MDBCardText>
                  </div>
                  <p className="lead fw-normal mb-1">Technologies</p>
                  <Technologies />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent Projects
                  </MDBCardText>
                </div>
               
              <Projects/>
             
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Bio;
