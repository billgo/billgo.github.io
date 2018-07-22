import React from "react";
import { Card, Tagger } from "yiqilaiui";

const PersonalSkills = props => (
  <Card className="mb-wide">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h4 className="my-none">Skills</h4>
    </Card.Head>
    <Card.Body className="px-medium py-small">
      <div className="bb-auto bb-dashed py-tiny">
        <h5 className="my-none">Programming</h5>
        <div className="py-mini">
          <Tagger size="tiny" className="mr-mini">JavaScript</Tagger>
          <Tagger size="tiny" className="mr-mini">Golang</Tagger>
          <Tagger size="tiny" className="mr-mini">Node</Tagger>
          <Tagger size="tiny" className="mr-mini">React</Tagger>
          <Tagger size="tiny" className="mr-mini">Redux</Tagger>
          <Tagger size="tiny" className="mr-mini">React Native</Tagger>
          <Tagger size="tiny" className="mr-mini">Less</Tagger>
          <Tagger size="tiny" className="mr-mini">Webpack</Tagger>
          <Tagger size="tiny" className="mr-mini">Express</Tagger>
          <Tagger size="tiny" className="mr-mini">Electron</Tagger>
          <Tagger size="tiny" className="mr-mini">Beego</Tagger>
          <Tagger size="tiny" className="mr-mini">Gin</Tagger>
          <Tagger size="tiny" className="mr-mini">GRPC</Tagger>
          <Tagger size="tiny" className="mr-mini">RESTful</Tagger>
          <Tagger size="tiny" className="mr-mini">GraphQL</Tagger>
          <Tagger size="tiny" className="mr-mini">Mysql</Tagger>
          <Tagger size="tiny" className="mr-mini">MongoDB</Tagger>
          <Tagger size="tiny" className="mr-mini">Redis</Tagger>
          <Tagger size="tiny" className="mr-mini">Docker</Tagger>
          <span className="ml-tiny">...</span>
        </div>
      </div>
      <div className="bb-auto bb-dashed py-tiny">
        <h5 className="my-none">Management</h5>
        <div className="py-mini">
          <Tagger size="tiny" className="mr-mini">OKR</Tagger>
          <Tagger size="tiny" className="mr-mini">BMC</Tagger>
          <Tagger size="tiny" className="mr-mini">UCDC</Tagger>
        </div>
      </div>
      <div className="py-tiny">
        <h5 className="my-none">Design</h5>
        <div className="py-mini">
          <Tagger size="tiny" className="mr-mini">Adobe XD</Tagger>
          <Tagger size="tiny" className="mr-mini">Pixelmator</Tagger>
          <Tagger size="tiny" className="mr-mini">Sketch</Tagger>
        </div>
      </div>
    </Card.Body>
  </Card>
);

export default PersonalSkills;