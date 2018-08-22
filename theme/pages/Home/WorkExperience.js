import React from "react";
import { Card } from "yiqilaiui";

const WorkHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h5 className="my-none text-uppercase">
          <strong>{props.company}</strong> / 
          <small className="ml-mini text-yellow">{props.position}</small>
        </h5>
        <div className="font-tiny">{props.location}</div>
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
        position="WEB DEVELOPER">
        <ul>
          <li>Interview user, write requirements documents, create product prototypes.</li>
          <li>Determine technology selection and lead the team to develop products, including ERP, OA and CMS etc.</li>
        </ul>
      </WorkHistory>
      <WorkHistory
        company="HOYOYO TECHNOLOGY (SHENZHEN) CO. LTD" 
        location="Shenzhen China"
        period="2013 - 2015" 
        position="SENIOR FRONTEND DEVELOPER">
        <ul>
          <li>Front-end development and maintenance, such as hoyoyo.com, prouter.com etc and reﬁned a higher versatility UI library.</li>
          <li>Assisted PM in creating product prototypes and optimizing design.</li>
        </ul>
      </WorkHistory>
      <WorkHistory 
        lasted
        company="SHENZHEN YOUYOU NET STACK TECHNOLOGY CO., LTD" 
        location="Shenzhen China"
        period="2012 - 2013" 
        position="OPERATIONS SPECIALIST">
        <ul>
          <li>Website promotion and user growth, the number of registered users increased from 0 to 50,000, and active users were maintained at 2000.</li>
          <li>Analysed operational data and adjusted operational strategies according to the data.</li>
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
          <li>Analysed operational data , optimised operational efficiencies and increase pay ratios.</li>
        </ul>
      </WorkHistory>
    </Card.Body>
  </Card>
);

export default WorkExperience;