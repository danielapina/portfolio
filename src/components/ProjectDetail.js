import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBTypography,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const ProjectDetail = ({
  setModal,
  modal,
  name,
  description,
  link,
  technologies,
  preview,
  id,
}) => {
  return (
    <MDBModal show={modal} tabIndex="-1" setShow={setModal}>
      <MDBModalDialog size="lg">
        <MDBModalContent >
          <MDBModalHeader>
            <MDBModalTitle>{name}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => setModal(!modal)}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCard className="mb-2 ">
              <MDBCardImage
                position="top"
                className="img-thumbnail "
                style={{ height: "60%", width: "85%", marginLeft: "7%" }}
                src={require(`./assets/${preview}`)}
                alt="..."
              />
              <MDBCardBody>
                <MDBCardText>{description}</MDBCardText>
                <MDBTypography listInLine className="mb-0 text-center">
                  {technologies.map((item, indx) => {
                    return (
                      <li
                        style={{
                          backgroundColor: "#BCC1C5",
                          padding: "1vmin",
                          borderRadius: "15px",
                        }}
                        className="list-inline-item"
                        key={indx}
                      >
                        {item}
                      </li>
                    );
                  })}
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
            <MDBModalFooter>
              <MDBBtn tag="a" href={link} target="_blank">
                Visit Page Hosting
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ProjectDetail;
