import React from "react";

function BtnContainer({ jobs, currentItem, func }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button key={item.id} className="job-btn" onClick={() => func(index)}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
