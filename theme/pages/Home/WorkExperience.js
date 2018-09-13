import React from "react";
import { Card } from "yiqilaiui";

const WorkHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h5 className="my-none text-uppercase">
          <strong>{props.company}</strong> / 
          <small className="ml-mini" style={{color:'#E3B944'}}>{props.position}</small>
        </h5>
        <div className="font-tiny text-uppercase">{props.location}</div>
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
      <h4 className="my-none text-uppercase">Work Experience</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <WorkHistory 
        company="LWH HOLDINGS PTE LTD" 
        location="Singapore"
        period="2015 - Present" 
        position="WEB DEVELOPER">
        <ul className="a-article-ul">
          <li>Interview users and leaders to write product requirement documents.</li>
          <li>Developing the corporate website and additional softwares for internal projects, including OA, CMS and ERP system.</li>
          <li>In charge the front-end development.</li>
        </ul>
      </WorkHistory>
      <WorkHistory
        company="HOYOYO TECHNOLOGY (SHENZHEN) CO. LTD" 
        location="Shenzhen"
        period="2013 - 2015" 
        position="SENIOR FRONTEND DEVELOPER">
        <ul className="a-article-ul">
          <li>Responsible for the front-end development and maintenance our ecommerce website, such as <a href="http://www.hoyoyo.com" target="_black">hoyoyo.com</a> and <a href="http://www.prouter.com" target="_black">prouter.com</a> etc.</li>
          <li>Assisted Product Manager in optimizing UI and UX design.</li>
        </ul>
      </WorkHistory>
      <WorkHistory 
        lasted
        company="SHENZHEN YOUYOU NET STACK TECHNOLOGY CO., LTD" 
        location="Shenzhen"
        period="2012 - 2013" 
        position="OPERATIONS SPECIALIST">
        <ul className="a-article-ul">
          <li>Website promotion and user growth, the number of registered users increased from 0 to 50,000, and active users about 2000.</li>
          <li>Analysed operational data then adjusted operational strategies according to the data.</li>
        </ul>
      </WorkHistory>
    </Card.Body>
  </Card>
);

export default WorkExperience;