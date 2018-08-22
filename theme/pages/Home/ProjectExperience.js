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
        position="INDEPENDENT DEVELOPER">
        <ul>
          <li>Developed all components based on ES6 and LESS, and compiled into ES5 and CSS using Webpack and Babel.</li>
          <li>Provided a set of high-quality application development tools.</li>
          <li>Deﬁned a design language system.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="GOLANG BASED ENTERPRISE RESOURCE MANAGEMENT SYSTEM" 
        period="2015 - 2018" 
        position="TEAM LEADER & CORE DEVELOPER">
        <ul>
          <li>Developed the front-end based on the React and Redux ecosystem and integrated with Electron to render better user experience of applications.</li>
          <li>Implemented the business API with Gin framework and Mysql and used the micro-services architecture for the server side.</li>
          <li>Simpliﬁed the structure of primary database through MongoDB to store document-intensive data.</li>
          <li>Built automated deployment system using Docker and Nginx to deploy applications automatically to ECS of Alibaba Cloud, adopted Docker Swarm for service cluster management.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        lasted
        name="CONTENT MANAGEMENT SYSTEM BASED ON BEEGO FRAMEWORK" 
        period="2017" 
        position="INDEPENDENT DEVELOPER">
        <ul>
          <li>Developed the front-end with Yarn, Webpack, React and LESS.</li>
          <li>Implemented the RESTful API with Beego 1.9.0 and Mysql 5.7.</li>
        </ul>
      </ProjectHistory>
    </Card.Body>
  </Card>
);

export default ProjectExperience;