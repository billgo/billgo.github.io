import React from "react";
import { Card } from "yiqilaiui";

const PersonalHobbies = props => (
  <Card className="mb-wide">
    <Card.Head className={`pa-medium text-left bb-auto`}>
      <h4 className="my-none">Hobbies</h4>
    </Card.Head>
    <Card.Body className="pa-medium font-mini">
      I like to code with Sublime Text 3, like to read on the Kindle Oasis 2, like to listen to music on Apple Music, like to play games with PS4.
    </Card.Body>
  </Card>
);

export default PersonalHobbies;