import React, { useState } from "react";

function Kit({ kitName, kitLink, basicKitLink, onRegenerate }) {
  return (
    <div className="kit-card">
      <h3>{kitName}</h3>
      <div className="kit-links">
        <div className="kit-link">
          <label>Kit Link:</label>
          <a href={kitLink} target="_blank" rel="noopener noreferrer">
            {kitLink}
          </a>
        </div>
        <div className="basic-kit-link">
          <label>Basic Kit Link:</label>
          <a href={basicKitLink} target="_blank" rel="noopener noreferrer">
            {basicKitLink}
          </a>
        </div>
      </div>
      <button className="regenerate-kit-btn" onClick={onRegenerate}>
        Regenerate Kit
      </button>
    </div>
  );
}

export default Kit;
