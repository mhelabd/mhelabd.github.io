import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';
import Research from './Research/Research';
import CategoryButton from './Skills/CategoryButton';

const ALL_CATEGORIES = 'All';

const JobExperience = ({ jobs, researches }) => {
  const [companyTypecategory, setCompanyTypeCategory] = useState(ALL_CATEGORIES);
  const [technologiesUsedCategory, setTechnologiesUsedCategory] = useState(ALL_CATEGORIES);
  const [timeFramesCategory, setTimeFramesCategory] = useState(ALL_CATEGORIES);
  const jobsAndResearch = jobs.concat(researches);
  const initCompanyTypes = () => (
    jobsAndResearch.flatMap((job) => job.companyType).sort().reduce((obj, key) => ({
      ...obj,
      [key]: false,
    }), { All: true })
  );
  const initTechnologiesUsed = () => (
    jobsAndResearch.flatMap((job) => job.technologiesUsed).sort().reduce((obj, key) => ({
      ...obj,
      [key]: false,
    }), { All: true })
  );
  const initTimeFrames = () => (
    jobsAndResearch.flatMap((job) => job.timeFrame).sort().reduce((obj, key) => ({
      ...obj,
      [key]: false,
    }), { All: true })
  );

  const [companyTypes, setCompanyTypes] = useState(initCompanyTypes());
  const [technologiesUsed, setTechnologiesUsed] = useState(initTechnologiesUsed());
  const [timeFrames, setTimeFrames] = useState(initTimeFrames());

  const getButtons = (type) => {
    let buttons;
    let setButtons;
    let setCategory;
    switch (type) {
      case 'companyTypes':
        buttons = companyTypes;
        setButtons = setCompanyTypes;
        setCategory = setCompanyTypeCategory;
        break;
      case 'technologiesUsed':
        buttons = technologiesUsed;
        setButtons = setTechnologiesUsed;
        setCategory = setTechnologiesUsedCategory;
        break;
      case 'timeFrames':
        buttons = timeFrames;
        setButtons = setTimeFrames;
        setCategory = setTimeFramesCategory;
        break;
      default:
        buttons = timeFrames;
        setButtons = setTimeFrames;
        setCategory = setTimeFramesCategory;
    }
    return (
      Object.keys(buttons).map((key) => (
        <CategoryButton
          label={key}
          key={key}
          active={buttons}
          handleClick={(e) => {
            setCategory(e);
            setButtons((prev) => (Object.keys(prev).reduce((acc, button) => {
              acc[button] = button === e;
              return acc;
            }, {})));
          }}
        />
      ))
    );
  };

  const checkPositionFilter = (position) => (
    (position.companyType.includes(companyTypecategory) || companyTypecategory === ALL_CATEGORIES)
    && (position.technologiesUsed.includes(technologiesUsedCategory)
    || technologiesUsedCategory === ALL_CATEGORIES)
    && (position.timeFrame.includes(timeFramesCategory) || timeFramesCategory === ALL_CATEGORIES)
  );

  const getWorkExperience = () => {
    const filteredJobs = jobs.filter(checkPositionFilter).map((j) => (
      <Job
        data={j}
        key={j.company + j.daterange}
      />
    ));
    if (filteredJobs.length === 0) {
      return (<p className="title">No relevant work experience for selection</p>);
    }
    return filteredJobs;
  };

  const getResearchExperience = () => {
    const filteredResearch = researches.filter(checkPositionFilter).map((r) => (
      <Research
        data={r}
        key={r.company + r.daterange}
      />
    ));
    if (filteredResearch.length === 0) {
      return (<p className="title">No relevant research experience for selection</p>);
    }
    return filteredResearch;
  };

  return (
    <>
      <div className="experience">
        <div className="link-to" id="experience" />
        <div className="title">
          <h2>Experience</h2>
          <p>You can filter the experiences to show only the most relevant ones
            to a particular topic.
          </p>
        </div>
        {/* <div className="skill-button-container">
          {getButtons('technologiesUsed')}
        </div> */}
        <div className="skill-button-container">
          {getButtons('companyTypes')}
        </div>
        {/* <div className="skill-button-container">
          {getButtons('timeFrames')}
        </div> */}
        <div className="title">
          <h3>Job Experience</h3>
        </div>
        {getWorkExperience()}
        <div className="title">
          <h3>Research Experience</h3>
        </div>
        {getResearchExperience()}
      </div>
    </>
  );
};

JobExperience.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
  })),
  researches: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
  })),
};

JobExperience.defaultProps = {
  jobs: [],
  researches: [],
};

export default JobExperience;
