import React from "react";
import { Card } from "teasim";

const WorkHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <h5 className="my-none text-uppercase font-bold">
      {props.company} / 
      <small className="ml-mini" style={{color:'#E3B944'}}>{props.position}</small>
    </h5>
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
      <h4 className="my-none text-uppercase">Work Experience</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <WorkHistory 
        company="LWH HOLDINGS PTE LTD" 
        location="Singapore"
        period="2015 - Present" 
        position="WEB DEVELOPER">
        <ul className="a-article-ul">
          <li>Wrote user requirements documents by interviewing users, created product prototypes.</li>
          <li>Developed the corporate website and additional softwares for internal use, including OA, CMS and ERP systems.</li>
          <li>In charge of technology architecture and front-end development, Sorted out a set of technology selection suitable for the business.</li>
        </ul>
      </WorkHistory>
      <WorkHistory
        company="HOYOYO TECHNOLOGY (SHENZHEN) CO. LTD" 
        location="Shenzhen"
        period="2013 - 2015" 
        position="FRONTEND DEVELOPER">
        <ul className="a-article-ul">
          <li>Responsible for front-end development and maintenance for e-commerce websites, e.g. <a href="http://www.hoyoyo.com" target="_black">hoyoyo.com</a> and <a href="http://www.prouter.com" target="_black">prouter.com</a>.</li>
          <li>Assisted Product Manager in optimizing UI and UX design.</li>
        </ul>
      </WorkHistory>
      <WorkHistory 
        lasted
        company="SHENZHEN YOUYOU NETSTACK TECHNOLOGY CO. LTD" 
        location="Shenzhen"
        period="2012 - 2013" 
        position="OPERATIONS SPECIALIST">
        <ul className="a-article-ul">
          <li>Promoted website through Sina Weibo and Baidu SEO, increased the number of registered users from 0 to 50,000+, and maintained active users at around 2000.</li>
        </ul>
      </WorkHistory>
    </Card.Body>
  </Card>
);

export default WorkExperience;