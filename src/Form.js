import React, { useState } from 'react';
import './Form.css';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function Form({ guests, review, emoji, updateInfo }) {
  
  const update = (guests, newText, newEmoji) => {
    updateInfo(guests, newText, newEmoji);
  }

  return (
    <div className="form">
      
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        onChange={e => update(guests, e.target.value, emoji)}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={e => update(e.target.value, review, emoji)}
        placeholder="2"
      />
      
      <label className="form-label">How was your meal?</label>
      <div>
          <Picker set='apple' exclude='symbols, flags, activity, places, objects, recent' onClick={(newEmoji, e) => update(guests, review, newEmoji.native)} />
      </div>

    </div>
  );
}

export default Form;
