import React from "react";
import "./responsive.css"; // Tell Webpack that Button.js uses these styles

export function Responsive() {
  return (
    <div>
      <div id="container">
        <div>
          <img
            height="50px"
            width="50px"
            src="https://iheartsvg.com/wp-content/uploads/2019/05/harrypotter-1024x1024.png"
          />
        </div>
        <div>
          <img
            height="50px"
            width="50px"
            src="https://iheartsvg.com/wp-content/uploads/2019/05/harrypotter-1024x1024.png"
          />
        </div>
      </div>
      <hr
      />
    </div>
  );
}
