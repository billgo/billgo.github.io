import React from "react";
import { Card, Button } from "yiqilaiui";

const ProjectHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h5 className="my-none">
          <strong>{props.name}</strong>
        </h5>
        <div className="font-tiny">{props.position}</div>
      </div>
      <div className="ds-fable-cell" style={{width:'75px'}}>
        <h6 className="my-none text-right"><small>{props.period}</small></h6>
      </div>
    </div>
    <div className="ds-block py-large font-mini">
      {props.children}
    </div>
  </div>
);

const ProjectExperience = props => (
  <Card className="mb-medium">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h4 className="my-none">Project Experience</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <ProjectHistory 
        name="A FRONTEND SOLUTION BASED ON REACT AND REDUX ECOSYSTEMS" 
        period="2015 - Present" 
        position="Founder">
        <ul>
          <li>All components are developed based on ES6 and compiled into ES5 using the Webpack and Babel tools.</li>
          <li>We provide a set of high-quality development tool applications, including samples, mockers, fackers, stylers etc.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="GOLANG BASED ENTERPRISE RESOURCE MANAGEMENT SYSTEM" 
        period="2015 - 2018" 
        position="Core Developers & Team Leader">
        <ul>
          <li>Based on the react and redux ecosystem for the front-end development,combined with Electorn rendering to experience better desktop application.</li>
          <li>Implemented the RESTful API with Gin framework and Mysql 5.7. Some document-intensive data is stored in MongoDB.</li>
          <li>In the process of implementing OpenID Connect Provider, I’ve learned more about the IPS.</li>
          <li>Automated system deployment with Docker, Nginx, CoreOS on Alibaba Cloud ECS. Management of service clusters using Docker Swarm.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        lasted
        name="CONTENT MANAGEMENT SYSTEM BASED ON BEEGO FRAMEWORK" 
        period="2017" 
        position="Independent Developers">
        <ul>
          <li>Developed the front-end with Yarn, Webpack, React and LESS for CSS pretreatment.</li>
          <li>Implemented the RESTful API with Beego 1.9.0 and Mysql 5.7.</li>
        </ul>
      </ProjectHistory>
    </Card.Body>
  </Card>
);

export default ProjectExperience;