import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Skill from './Skill';
import SubSkill from './SubSkill';
import LearningLog from './LearningLog';
import Project from './Project';
import WorkExperiences from './WorkExperiences/WorkExperiences';
import OtherExperience from './OtherExperience';
import Educations from './Educations/Educations';

export default function Main() {
  return (
    <MainWrap>
      <Intro />
      <Skill />
      <SubSkill />
      <LearningLog />
      <Project />
      <WorkExperiences />
      <OtherExperience />
      <Educations />
    </MainWrap>
  );
}

const MainWrap = styled.div``;
