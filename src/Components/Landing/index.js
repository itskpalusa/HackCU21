import React from 'react';

const Landing = () => (
  <div>
    <h1 style={{textAlign: "center"}}>Welcome to TimeTrack! </h1>
    <h3 style={{textAlign: "center"}} className="lead">A place where you can keep track of each and every hour of the day!</h3>
      <hr class="my-4"></hr>


  <div class="jumbotron">
  <p> Insert pic of home page</p>
  </div>

  <div>
    <h2 style={{textAlign: "center", paddingBottom: "5px"}}>
        Why TimeTrack?</h2>
    <p style={{textAlign: "center", fontSize: "20px"}}>
      TimeTrack will help you:
    </p>
    <ul class="glyphicon glyphicon-check"
     style={{textAlign: "center",
               listStylePosition: "inside"}}>
      <li>
      Enhance productivity &nbsp; &nbsp; &nbsp; &nbsp;
      </li>
      <li>
        Keep yourself accountable 
      </li>
      <li>
        Achieve work life balance &nbsp;
      </li>
    </ul>
  </div>
  </div>
);

export default Landing;
