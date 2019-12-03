import React, { useEffect } from 'react';
import './Preview.css';

function Preview(props) {
  // updateGuests((numGuests) => {
  //   // let guests = document.getElementsByClassName("form-input")[0].value
  //   console.log(numGuests)
  //   // document.getElementsByClassName("preview-party")[0].innerHTML = `${guests} people dined here.`
  // })

  // useEffect(() => {
  //   let guests = document.getElementsByClassName("form-input")[0].value
  //   document.getElementsByClassName("preview-party")[0].innerHTML = `${guests} people dined here.`})
  // }, [document.getElementsByClassName("preview-party")[0].innerHTML])

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
          {/* {document.getElementsByClassName("form-input")[0].value}  */}
          2 people dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;
