import React from "react";
import { View, Grid, Sticker, TypeWrite } from "teasim";
import Application from "app/components/Application";

import PersonalAvatar from './PersonalAvatar';
import PersonalExpect from './PersonalExpect';
import PersonalSkills from './PersonalSkills';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import EducationBackground from './EducationBackground';

const texts = [[{ string: 'Try it and learn from err ' }, { string: '!= nil', color: '#8C9bA5' }, { string: ' .' }]];

export default (props) => (
  <Application title={props.themeConfig.sitename + " | " + props.themeConfig.slogan} {...props} >
    <View className="bg-auto py-wide" style={{maxHeight: '57px'}}>
      <div className="screen-md py-none">
        <h3 className="my-none">
          <TypeWrite 
            texts={texts} 
            speed={50} 
          />
        </h3>
      </div>
    </View>
    <div className="screen-md py-wide">
      <Grid gapping>
        <Grid.Column xs={{ size: 24 }} sm={{ size: 6 }}>
          <PersonalAvatar />
          <PersonalSkills />
          <PersonalExpect />
        </Grid.Column>
        <Grid.Column xs={{ size: 24 }} sm={{ size: 18 }}>
          <WorkExperience />
          <ProjectExperience />
          <EducationBackground />
        </Grid.Column>
      </Grid>
    </div>
  </Application>
)