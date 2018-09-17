import React from "react";
import { Card, Button } from "teasim";

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
      <h4 className="my-none text-uppercase">Project Experience</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <ProjectHistory 
        name="A FRONTEND FRAMEWORK BASED ON REACT AND REDUX ECOSYSTEMS" 
        period="2015 - Present" 
        position="INDEPENDENT DEVELOPER">
        <ul className="a-article-ul">
          <li>Developed components based on ECMAScript 6 and LESS, then compiled into JavaScript and CSS using webpack and babel.</li>
          <li>80+ common components are extracted for daily development, more related documents please visit my website <a href="https://www.teasim.com" target="_black" >teasim.com</a>.</li>
          <li>Provided a set of high-quality application tools, such as mockers and fackers.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="CONSTRUCTION INDUSTRY ERP SYSTEM BASED ON MICROSERVICE ARCHITECTURE" 
        period="2015 - 2018" 
        position="TEAM LEADER & CORE DEVELOPER">
        <ul className="a-article-ul">
          <li>Developed the web front-end with the React and Redux ecosystem, then integrate with Electron to improve the user experience.</li>
          <li>Implemented the API with Beego and Mysql. Used MongoDB to store some document-intensive data to simplify the database structure.</li>
          <li>Builded automated deployment system using Docker and Swarm, automatically deploy applications to ECS of Alibaba Cloud.</li>
          <li>Git-based development workﬂows, using Eslint and Prettier to help us unify the code style.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        lasted
        name="CONTENT MANAGEMENT SYSTEM DEVELOPED USING THE BEEGO FRAMEWORK" 
        period="2017" 
        position="INDEPENDENT DEVELOPER">
        <ul className="a-article-ul">
          <li>Developed the front-end with jQuery, Bootstrap3 and Less.</li>
          <li>Implemented the RESTful API with Beego1.9 and Mysql 5.7.</li>
          <li>Builded monolithic application of the MVC pattern.  <br />e.g. <a href="https://www.catnogo.com" target="_black" >catnogo.com</a>, <a href="http://www.lwhconst.com.sg" target="_black" >lwhconst.com.sg</a>.</li>
        </ul>
      </ProjectHistory>
    </Card.Body>
  </Card>
);

export default ProjectExperience;