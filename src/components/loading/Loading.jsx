import React from "react";
import "./loading.css";

export const Loading = () => {
  return (
    <div>
      <div className="loading-spinner">
        <div role="status" className="loading-spinner-element">
          <span className="loading-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
