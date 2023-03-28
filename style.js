import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="body">
      <div className="outerdiv">
        <div className="fflex">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-box">
                  <img className="picture" src="profile.jpg" alt="profile" />
                </div>
                <div className="name">John Doe</div>
                <div className="skills">Web Developer</div>
              </div>
              <div className="flip-card-back">
                <div className="words">
                  <div>Hi there! I'm John Doe.</div>
                  <div>I'm a web developer based in the US.</div>
                  <div>Let's work together!</div>
                  <button className="more">More about me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="currentpos">
        <div className="anj">Made by Anj</div>
      </div>
      <div className="header">
        <h1>My Portfolio</h1>
      </div>
    </div>
  );
}

export default App;
