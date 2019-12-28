import React from 'react';
import './Preview.css';

function Preview({ guests, review, emoji }) {

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">

        <div className="preview-emoji">
          {emoji}
        </div>

        <div className="preview-feedback">
          {review}
        </div>

        <div className="preview-party">
          <p className="num-guests">{guests}</p> people dined here.
        </div>

      </div>
    </section>
  );
}

export default Preview;
