import React from "react";

const Confirmation = ({ onSendAgain }) => {
  return (
    <>
      <div>
        <h2 className="greet-msg">Thank you!</h2>
        <p className="confirm-content">
          We have received your enquiry and sent you an email. Please check your
          mailbox.
        </p>
      </div>
      <button onClick={onSendAgain}>Home Page</button>
    </>
  );
};

export default Confirmation;
