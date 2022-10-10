import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  import { ValidationError } from '@formspree/react';

const MessageModal = ({basicModal,setBasicModal, toggleShow, handleSubmit, state}) => {
  return (
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' >
      <MDBModalDialog>
        <MDBModalContent style={{color:"#000", textAlign:"center"}}>
          <MDBModalHeader>
            <MDBModalTitle>Message Me!</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody >
      <form onSubmit={handleSubmit} >
     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around',alignItems: 'center',gap: '15px'}}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
        <MDBModalFooter>
            <MDBBtn color='light' onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn type="submit" disabled={state.submitting}>Send</MDBBtn>
          </MDBModalFooter>
        
    </form>
          </MDBModalBody>

        
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default MessageModal