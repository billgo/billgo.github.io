import React from "react";
import { Card, Button } from "teasim";

const ProjectHistory = (props) => (
  <div className={`mb-large ${props.lasted ? '' : "bb-auto bb-dashed"}`}>
    <h5 className="my-none">
      <strong>{props.name}</strong>
    </h5>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <div className="font-tiny">{props.position}</div>
      </div>
      <div className="ds-fable-cell" style={{width:'80px'}}>
        <h6 className="text-right font-tiny my-none"><small>{props.period}</small></h6>
      </div>
    </div>
    <div className="ds-block py-large font-mini font-serif">
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
        position="Independent Developer">
        <ul className="a-article-ul">
          <li>Developed components based on ECMAScript 6 and Less, compiled to JavaScript and CSS using webpack and babel.</li>
          <li>Provided 80+ common components and boilerplates, for more related documents, please visit my website <a href="https://www.teasim.com" target="_black" >teasim.com</a>.</li>
          <li>Integrated a set of development tools from community to enhance the development experience. e.g. Storybook.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        name="ENTERPRISE RESOURCE MANAGEMENT SYSTEM FOR CONSTRUCTION INDUSTRY" 
        period="2015 - 2018" 
        position="Team Leader & Core Developer">
        <ul className="a-article-ul">
          <li>Developed single page application with React and Redux, improved render performance using Immutable.js.</li>
          <li>Wrote unit, functional and end-to-end tests with Jest & Enzyme.</li>
          <li>Formatted JavaScript code using Eslint and Prettier.</li>
          <li>Developed OpenID Connect Provider using Golang for authentication and authorization services.</li>
          <li>Built application's docker images and deployment scripts, automatically deployed applications to ECS of Alibaba Cloud.</li>
          <li>Introduced Git workflow and CI approach for code management, simplifying team collaboration and securing code quality.</li>
        </ul>
      </ProjectHistory>
      <ProjectHistory
        lasted
        name="CONTENT MANAGEMENT SYSTEM DEVELOPED USING BEEGO FRAMEWORK" 
        period="2017" 
        position="Independent Developer">
        <ul className="a-article-ul">
          <li>Developed front-end with jQuery, Bootstrap3 and Less.</li>
          <li>Implemented the RESTful API with Beego and MySQL, automatically deployed to Alibaba Cloud through Docker. e.g<a href="http://www.lwhconst.com.sg" target="_black" >lwhconst.com.sg</a>.</li>
        </ul>
      </ProjectHistory>
    </Card.Body>
  </Card>
);

export default ProjectExperience;