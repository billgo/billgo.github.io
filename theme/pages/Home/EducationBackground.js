import React from "react";
import { Card } from "teasim";

const InternHistory = (props) => (
  <div className={`mb-large ${props.lastChild ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h6 className="my-none font-bold">{props.company}</h6>
        <div className="font-tiny">{props.position}</div>
      </div>
      <div className="ds-fable-cell" style={{width:'75px'}}>
        <h6 className="my-none text-right"><small>{props.period}</small></h6>
      </div>
    </div>
  </div>
);

const EducationBackground = props => (
  <Card className="mb-medium">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h5 className="my-none text-uppercase">Education Background</h5>
    </Card.Head>
    <Card.Body className="pa-medium">
      <InternHistory 
        lastChild
        company="Guangdong University of Finance & Economics"
        period="2008 - 2012" 
        position="Bachelor in Economics"
      />
    </Card.Body>
  </Card>
);

export default EducationBackground;