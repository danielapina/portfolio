import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";
import grey from "./assets/grey.png";
import "./styles/Carousel.css";

const Technologies = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
          
          <MDBCard className="h-100">
            <MDBCardBody>
              <div className="d-flex align-items-center flex-column ">
                <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="js-square" />
               
                  <p className="fw-bold mb-1">JavaScript</p>
                 
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="h-100">
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column " >
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="html5" />
       
                  <p className="fw-bold mb-1">HTML5</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="g-col-6">
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="css3-alt" />
          
                  <p className="fw-bold mb-1">CSS3</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="g-col-6">
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="sass" />
               
                  <p className="fw-bold mb-1">SASS</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
    
    <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
            
                  <p className="fw-bold mb-1">TypeScript</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="react" />
          
                  <p className="fw-bold mb-1">React.JS</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="angular" />
       
                  <p className="fw-bold mb-1">Angular.JS</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="bootstrap" />
         
                  <p className="fw-bold mb-1">Bootstrap</p>
                </div>
                <MDBBadge pill light color="warning">
                  styles
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
         
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fas icon="code-branch" />
     
                  <p className="fw-bold mb-1">Git</p>
                </div>
                <MDBBadge pill color="dark" light>
                  versions
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="node" />
        
                  <p className="fw-bold mb-1">Node.JS</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
           <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="trello" />
    
                  <p className="fw-bold mb-1">Trello</p>
                </div>
                <MDBBadge pill light color="secondary">
                  management
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="figma" />
          
                  <p className="fw-bold mb-1">Figma</p>
                </div>
                <MDBBadge pill light color="warning">
                  styles
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCarouselItem>
  
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">RxJS</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
              
                  <p className="fw-bold mb-1">Redux</p>
                </div>
                <MDBBadge pill light color="success">
                  Frontend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
              
                  <p className="fw-bold mb-1">MongoDB</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
        
                  <p className="fw-bold mb-1">Express</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={5}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
          
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
            
                  <p className="fw-bold mb-1">Mongoose</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
    
                  <p className="fw-bold mb-1">PostMan</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />
        
                  <p className="fw-bold mb-1">Agile/Scrum</p>
                </div>
                <MDBBadge pill light color="secondary">
                  management
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row " style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">Angular-Material</p>
                </div>
                <MDBBadge pill light color="warning">
                  styles
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={6}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
         
         
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">React-Bootstrap</p>
                </div>
                <MDBBadge pill light color="warning">
                  styles
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">Netifly</p>
                </div>
                <MDBBadge pill light color="light">
                  hosting
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">Heroku</p>
                </div>
                <MDBBadge pill light color="light">
                  hosting
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="" />

                  <p className="fw-bold mb-1">Firebase</p>
                </div>
                <MDBBadge pill light color="primary">
                  backend
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={7}
        src={grey}
        alt="..."
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black", gap: ".5rem" }}
        >
          <MDBCard>
            <MDBCardBody>
            <div className="d-flex align-items-center flex-column ">
            <div className="d-flex align-items-center flex-row "  style={{gap:".5rem"}}>
                <MDBIcon fab icon="mdb" />

                  <p className="fw-bold mb-1">MDB react</p>
                </div>
                <MDBBadge pill light color="warning">
                  Style
                </MDBBadge>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Technologies;
