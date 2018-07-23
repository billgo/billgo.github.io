import React from "react";
import { Card } from "yiqilaiui";

const WorkHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h5 className="my-none">
          <strong>{props.company}</strong>
          <small className="ml-mini">({props.location})</small>
        </h5>
        <div className="font-tiny">{props.position}</div>
      </div>
      <div className="ds-fable-cell" style={{width:'80px'}}>
        <h6 className="text-right font-tiny my-none"><small>{props.period}</small></h6>
      </div>
    </div>
    <div className="ds-block py-large font-mini">
      {props.children}
    </div>
  </div>
);

const WorkExperience = props => (
  <Card className="mb-medium">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h4 className="my-none">Work Experience</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <WorkHistory 
        company="LWH HOLDINGS PTE LTD" 
        location="Singapore"
        period="2015 - Present" 
        position="Web Developers">
        <ul>
          <li>Write the user requirements documents.</li>
          <li>Creating product prototypes and do presentation.</li>
          <li>Program development and technical team management.</li>   
        </ul>
      </WorkHistory>
      <WorkHistory
        company="Prouter International Logistics Co., Ltd." 
        location="Shenzhen China"
        period="2013 - 2015" 
        position="Frontend Developers">
        <ul>
          <li>Responsible for the front-end development of our website. including hoyoyo.com, hoyopay.com, prouter.com etc.</li>
          <li>Creating product prototypes and write the user requirements documents.</li>
        </ul>
      </WorkHistory>
      <WorkHistory 
        company="Shenzhen YouYou Net Stack Technology Co., Ltd." 
        location="Shenzhen China"
        period="2012 - 2013" 
        position="Operations Specialist">
        <ul>
          <li>Mainly responsible for the promotion of our website. During my work, registered users grew from 0 to nearly 50,000, active users about 2000.</li>
          <li>Data summary and analysis, adjust the operation strategy.</li>
        </ul>
      </WorkHistory>
      <WorkHistory
        lasted
        company="Sungy Mobile Limited" 
        location="Guangzhou China"
        period="2012 - 2012" 
        position="Game Operators Intern">
        <ul>
          <li>The daily operation of mobile game "Jue Shi Wu Shuang Online”.</li>
          <li>Analyse data, optimise operational efficiencies and increase pay ratios.</li>
        </ul>
      </WorkHistory>
    </Card.Body>
  </Card>
);

export default WorkExperience;