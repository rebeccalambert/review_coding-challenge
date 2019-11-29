import React from 'react';
import './Preview.css';

function Preview(props) {

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">

          😍
          {/* Your emoji code goes here */}

        </div>
        <div className="preview-feedback">
          Let us know what we did well or could improve...
          {/* Dynamic feedback goes here */}
        </div>
        <div className="preview-party">
          2 {/* Dynamic party code goes here */} people dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;
