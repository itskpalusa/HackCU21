import React from 'react';

const Landing = () => (
  <div>
    <h1 style={{textAlign: "center"}}>Welcome to TimeTrack! </h1>
    <h3 style={{textAlign: "center"}} className="lead">A place where you can keep track of each and every hour of the day!</h3>
      <hr class="my-4"></hr>


  <div class="jumbotron"
      style={{marginInline: "100px"}}>
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


  <footer class="jumbotron"
    style={{marginBottom: "0px",
            marginTop: "300px"}}>
      <table>
        <tr>
          <td>
      <a href="https://https://www.google.com/maps"
      style={{padding: "3px",
              marginLeft: "340px",
              marginTop: "10px"}}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.udMrBx8P7wuW7NLQSX1xVAHaJo&pid=Api&P=0&w=300&h=300"
        alt="location img"
        width="40"
        height="50">
      </img>
      </a> <br/><br/>
        </td>
      <p style={{paddingLeft: "7px"}}>751 W Pitkin St <br/>
        Fort Collins, CO</p>
      <td>
      <h5 style={{paddingLeft: "241px",
                  paddingTop: "40px"}}>Find Us Online</h5>
      </td>
      </tr>
      <tr>
        <td>
      <a 
      style={{padding: "3px",
              marginLeft: "340px",
              marginTop: "15px"}}>
      <img src="https://image.flaticon.com/icons/png/512/25/25453.png"
        alt="phone img"
        width="40"
        height="40">
      </img>
      </a> <br/><br/>
      </td>
      <td>
      <p style={{paddingBottom: "30px"}}>+1 800 123 4567</p>
      </td>
      <td>
      <a href="https://facebook.com"
      style={{paddingRight: "8px",
              marginLeft: "200px",
              marginTop: "20px"}}>
      <img src="https://tse2.mm.bing.net/th?id=OIP.ksJWY_3Z2WWqKPgsQkBbhgHaHa&pid=Api&P=0&w=300&h=300"
        alt="facebook logo"
        width="40"
        height="40">
      </img>
    </a>
    <a href="https://instagram.com"
      style={{padding: "8px"}}>
      <img src="http://vectorlogofree.com/wp-content/uploads/2014/09/21426-instagram-logo-silhouette-icon-vector-icon-vector-eps.png" 
        alt="instagram logo"
        width="40"
        height="40">
      </img>
    </a>
    <a href="https://linkedin.com"
      style={{padding: "8px"}}>
      <img src="https://img.freepik.com/free-icon/linkedin-logo-button_318-84979.jpg?size=338c&ext=jpg" 
      alt="linkedin logo"
      width="40"
      height="40">
      </img>
    </a>
    <a href="https://github.com"
      style={{padding: "8px"}}>
      <img src="https://image.flaticon.com/icons/svg/38/38401.svg" 
      alt="github logo"
      width="40"
      height="40">
      </img>
    </a>
      </td>
      </tr>
      <tr>
        <td>
      <a 
      style={{padding: "3px",
              marginLeft: "340px",
              marginTop: "15px"}}>
      <img src="https://www.netclipart.com/pp/m/43-438754_icons-webmail-computer-mail-email-yahoo-u-turn.png"
        alt="email img"
        width="40"
        height="42">
      </img>
      </a>
      </td>
      <p style={{paddingLeft: "5px"}}>contact@timetrack.com</p>
      </tr>
      </table>
  </footer>
  </div>
);

export default Landing;
