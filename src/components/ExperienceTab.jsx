import React, { Component } from 'react';
import '../styles/Experience.scss';
import Collapse, { Panel } from 'rc-collapse';
class ExperienceTab extends Component {
  getTitleInfo() {
    return (
      <div className='job-info'>
        <img src={this.props.jobIcon} className='job-icon' />
        <span className='job-intro'>
          <div className='job-title'>{this.props.jobTitle}</div>
          <div className='job-short'>{this.props.jobShort}</div>
        </span>
      </div>
    );
  }
  render() {
    return (
      <div className='collapse-wrapper'>
        <Collapse>
          <Panel className='panel' header={this.getTitleInfo()}>
            <p>{this.props.jobDescription}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default ExperienceTab;
