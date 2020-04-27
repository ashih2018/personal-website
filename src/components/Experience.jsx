import React, { Component } from 'react';
import ExperienceTab from './ExperienceTab';
import '../styles/Experience.scss';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const jobTitles = ['WatchGuard', 'University of Toronto', 'MITRE'];
const jobShorts = [
  'Full stack developer',
  'Open source software developer',
  'Front end developer',
];
const jobDescriptions = ['asda', 'asfdasdf', 'asfdasdfsf'];
const jobIcons = [
  require('../images/Watchguard.jpg'),
  require('../images/UofT.png'),
  require('../images/Mitre.jpg'),
];

class Experience extends Component {
  getExperience() {
    const allExperiences = [];
    for (let i = 0; i < jobTitles.length; i++) {
      allExperiences.push(
        <ExperienceTab
          jobTitle={jobTitles[i]}
          jobShort={jobShorts[i]}
          jobDescription={jobDescriptions[i]}
          jobIcon={jobIcons[i]}
        />
      );
    }
    return allExperiences;
  }

  render() {
    return (
      <div id='experience' className='experience-wrapper'>
        <div className='inner-wrapper'>
          <h1>My Experience</h1>
          {this.getExperience()}
        </div>
      </div>
    );
  }
}

export default Experience;
