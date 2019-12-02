import React, { useState } from 'react';
import './Form.css';

function Form(props) {


  const update = () => {
    console.log("something changed")
  }

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        // onChange={console.log("feedback changed")}
        onChange={update}

        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={update}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div>

        *** Add Emoji selector ***
        {/* Your Code goes here */}

      </div>
    </div>
  );
}

export default Form;
