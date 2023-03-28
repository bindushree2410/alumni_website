import React from 'react';
import './cards.css';

function AlumniCard(props) {
  return (
    <div className="outerdiv">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="name">
              {props.name}
            </div>
            <div className="profile-box">
              <img className="picture" src={props.imageUrl} alt={props.name} />
            </div>
            <div className="skills">
              {props.skills}
            </div>
            <div className="button">
              <button className="more">more...</button>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="words">
              {props.quote}
            </div>
            <div className="anj">
              - {props.name}
            </div>
            <div className="currentpos">
              Our Alumni is currently working at..
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="header">
        <h1 className="htext">OUR ALUMNI</h1>
      </div>
      <div className="fflex">
        <AlumniCard 
          name="ADITI JOSHI"
          imageUrl="OIP.jpg"
          skills="Web Dev & App Dev"
          quote="This is what I felt being as a CORSIT member dfnj sdfndk asn dsbh v hdxnb cvb cxhbv xkchbv xcbh dsfhbk sdckjs sdvbn dcsj dsjs dfsjn sdfjcn dfcj."
        />
        <AlumniCard 
          name="ADITI JOSHI"
          imageUrl="OIP.jpg"
          skills="Web Dev & App Dev"
          quote="This is what I felt being as a CORSIT member dfnj sdfndk asn dsbh v hdxnb cvb cxhbv xkchbv xcbh dsfhbk sdckjs sdvbn dcsj dsjs dfsjn sdfjcn dfcj."
        />
        <AlumniCard 
          name="ADITI JOSHI"
          imageUrl="OIP.jpg"
          skills="Web Dev & App Dev"
          quote="This is what I felt being as a CORSIT member dfnj sdfndk asn dsbh v hdxnb cvb cxhbv xkchbv xcbh dsfhbk sdckjs sdvbn dcsj dsjs dfsjn sdfjcn dfcj."
        />
        <AlumniCard 
          name="ADITI JOSHI"
          imageUrl="OIP.jpg"
          skills="Web Dev & App Dev"
          quote="This is what I felt being as a CORSIT member dfnj sdfndk asn dsbh v hdxnb cvb cxhbv xkchbv xcbh dsfhbk sdckjs sdvbn dcsj dsjs dfsjn sdfjcn dfcj."
        />
      </div>
    </div>
  );
}

export default App;

