import React, { useState } from 'react';
import './Form.css';

function Form(props) {

  const [people, setPeople] = useState(1)
  
  const update = () => {
    // console.log("something changed")
    // let guests = document.getElementsByClassName("form-input")[0].value
    // // console.log(guests)
    // setPeople(guests)
    // // console.log(guests)
  }

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
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
