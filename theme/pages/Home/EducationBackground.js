import React from "react";
import { Card } from "yiqilaiui";

const InternHistory = (props) => (
  <div className={`mb-large ${props.lastChild ? '' : "bb-auto bb-dashed"}`}>
    <div className="ds-fable">
      <div className="ds-fable-cell">
        <h5 className="my-none"><strong>{props.company}</strong></h5>
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
      <h4 className="my-none text-uppercase">Education Background</h4>
    </Card.Head>
    <Card.Body className="pa-medium">
      <InternHistory 
        lastChild
        company="Guangdong University Of Finance & Economics"
        period="2008 - 2012" 
        position="Bachelor in Economics"
      />
    </Card.Body>
  </Card>
);

export default EducationBackground;