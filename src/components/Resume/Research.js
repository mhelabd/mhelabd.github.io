import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Research from './Research/Research';

const ResearchExperience = ({ data }) => {
  const [isCollapsed, setCollapsedI] = useState(true);
  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>Research Experience</h3>
      </div>
      {data.filter((_, i) => (isCollapsed && i < 4) || !isCollapsed).map((research) => (
        <Research
          data={research}
          key={research.company + research.daterange}
        />
      ))}
      <div className="title">
        <button
          type="button"
          style={{ width: 200 }}
          onClick={() => setCollapsedI(!isCollapsed)}
        >
          {isCollapsed
            ? <FontAwesomeIcon icon={faChevronDown} />
            : <FontAwesomeIcon icon={faChevronUp} />}
        </button>
      </div>
    </div>
  );
};

ResearchExperience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

ResearchExperience.defaultProps = {
  data: [],
};

export default ResearchExperience;
