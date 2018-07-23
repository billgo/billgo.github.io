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
        name="A Frontend Framework Based on React and Redux Ecosystems" 
        period="2015 - Present" 
        position="Founder">
        <ul>
          <li>React and redux based, lightweight framework, and the design system with rationalism for better user experience of enterprise applications.</li>
          <li>All components are developed based on ES6 and compiled into ES5 using the Webpack and Babel tools.</li>
          <li>On the basis of the community, we provide a set of high-quality development tool applications, including samples, mockers, fackers, stylers etc.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="Golang based Enterprise Resource Management System" 
        period="2015 - 2018" 
        position="Core Developers & Team Leader">
        <ul>
          <li>Based on the react and redux ecosystem to develop frontend pages, combined with Electorn rendering to experience a better desktop application. We use Redux-saga for asynchronous processing and immutable.js to improve performance.</li>
          <li>Implemented the RESTful API with Gin framework. In the process of implementing OpenID Connect Provider, I've learned more about the IPS.</li>
          <li>Mysql is our primary database, but some of the document-intensive data is stored in MongoDB, such as the material system. Memory database we use Redis.</li>
          <li>Automated system deployment with Docker, Nginx, Alpine Linux, CoreOS on Alibaba Cloud ECS. Management of service clusters using Docker Swarm.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="Content Management System (CMS) Base on Beego framework." 
        period="2017" 
        position="Independent Developers">
        <ul>
          <li>Developed the frontend with Yarn, Webpack, React and Less for CSS pretreatment.</li>
          <li>Implemented the RESTful API with Beego 1.9.0 and Mysql 5.7.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="HOYOYO & HOYOPAY & PROUTER" 
        period="2013 - 2015" 
        position="Frontend Developers"
        lasted>
        <ul>
          <li>Designed and developed the Ajas based fronend with jQuery, Bootstrap and Less.</li>
          <li>Used Sketch to do some simple design.</li>
        </ul>
      </ProjectHistory>
    </Card.Body>
  </Card>
);

export default ProjectExperience;