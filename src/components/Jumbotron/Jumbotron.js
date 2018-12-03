


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
import React from 'react';
import "./style.css";


const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">React Clicky Game!</h1>
    <p className="lead">Click on any image to earn points, but don't click on any more than once!</p>
  </div>
</div>
);
export default Jumbotron;