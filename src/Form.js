import React, { useState } from 'react';
import './Form.css';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function Form({ guests, review, updateInfo }) {
  
  const update = (guests, newText) => {
    updateInfo(guests, newText);
  }

  return (
    <div className="form">
      
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        onChange={e => update(guests, e.target.value)}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={e => update(e.target.value, review)}
        placeholder="2"
      />
      

      <label className="form-label">How was your meal?</label>
      <div>
          <Picker set='emojione' exclude='symbols, flags, activity, places, objects, recent' />
      </div>

    </div>
  );
}

export default Form;
