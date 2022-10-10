import React, { useState} from "react";
import MessageModal from "./MessageModal";
import { MDBBtn } from "mdb-react-ui-kit";

import { useForm } from "@formspree/react";

const MessageMe = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [state, handleSubmit] = useForm("xyyvjlkj");
  if (state.succeeded) {
    console.log(state.succeeded)
    return <p  style={{ zIndex: "3" }}>Thanks for joining!</p>;
  }


  return (
    <div className="d-flex flex-row">
      <MDBBtn
        outline
        color="dark"
        onClick={toggleShow}
        style={{ height: "36px", overflow: "visible" }}
      >
        Message Me
      </MDBBtn>
      <MessageModal
        basicModal={basicModal}
        setBasicModal={setBasicModal}
        toggleShow={toggleShow}
        handleSubmit={handleSubmit}
        state={state}
      />
    </div>
  );
};

export default MessageMe;
