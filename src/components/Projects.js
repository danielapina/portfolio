import React, { useState } from "react";
import AppsData from "./data/data.json";
import {
  MDBCard,
  MDBCardImage,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

import ProjectDetails from "./ProjectDetail.js";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (name,descripction,link,technologies,preview,id) => {
    let tempData = [name,descripction,link,technologies,preview];
    setTempData(item => [1, ...tempData]);
    return setModal(!modal);
  }
  return (
    <>
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      {AppsData.map((app) => {
        return (
          <MDBCol key={app.id}>
            <MDBCard className="h-100" key={app.id}>
              <MDBCardImage
                className="img-thumbnail h-100"
                src={require(`./assets/${app.preview}`)}
                alt="..."
                position="top"
              />
              <MDBCardFooter>
                <MDBBtn onClick={()=>getData(app.name,app.description,app.link,app.technologies,app.preview, app.id)}>Details</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        );
      })}

    </MDBRow>

{modal && <ProjectDetails
name={tempData[1]} description={tempData[2]} link={tempData[3]} technologies={tempData[4]} preview={tempData[5]} id={tempData[6]}
modal={modal}
setModal={setModal}
/> }

</>
  );
};

export default Projects;
