import React from "react";
import { Card } from "teasim";

const WorkHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <h6 className="my-none text-uppercase" style={{color:'black'}}>
      {props.position} 
      <small className="ml-mini" style={{color:'rgba(0, 0, 0, 0.65)'}}> @ {props.company}</small>
    </h6>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <div className="font-tiny">{props.location}</div>
      </div>
      <div className="ds-fable-cell" style={{width:'80px'}}>
        <div className="text-right font-tiny"><small>{props.period}</small></div>
      </div>
    </div>
    <div className="ds-block py-large font-mini font-serif">
      {props.children}
    </div>
  </div>
);

const WorkExperience = props => (
  <Card className="mb-medium">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h5 className="my-none text-uppercase">Work Experience</h5>
    </Card.Head>
    <Card.Body className="pa-medium">
      <WorkHistory 
        company="LWH HOLDINGS PTE LTD" 
        location="Singapore"
        period="2015 - 2019" 
        position="FULLSTACK DEVELOPER">
        <ul className="a-article-ul">
          <li>Wrote user requirements documents by interviewed users, created product prototypes.</li>
          <li>Developed the corporate website and additional softwares for internal use, including OA, CMS and ERP systems.</li>
          <li>In charge of technology architecture and front-end development, Sorted out a set of technology selection solutions suitable for the business, and optimised the code development process.</li>
        </ul>
      </WorkHistory>
      <WorkHistory
        company="HOYOYO TECHNOLOGY (SHENZHEN) CO. LTD" 
        location="Shenzhen"
        period="2013 - 2015" 
        position="FRONTEND DEVELOPER">
        <ul className="a-article-ul">
          <li>Responsible for front-end development and maintenance, independently completed the front-end development of <a href="http://www.hoyoyo.com" target="_black">hoyoyo.com</a> and <a href="http://www.prouter.com" target="_black">prouter.com</a>.</li>
          <li>Assisted Product Manager in optimising UI and UX design, increased e-commerce conversion rate by around 20%.</li>
        </ul>
      </WorkHistory>
      <WorkHistory 
        lasted
        company="SHENZHEN YOUYOU NETSTACK TECHNOLOGY CO. LTD" 
        location="Shenzhen"
        period="2012 - 2013" 
        position="OPERATION SPECIALIST">
        <ul className="a-article-ul">
          <li>Promoted website through Sina Weibo and Baidu SEO, increased the number of registered users from 0 to 50,000, and maintained active users at around 2000.</li>
        </ul>
      </WorkHistory>
    </Card.Body>
  </Card>
);

export default WorkExperience;