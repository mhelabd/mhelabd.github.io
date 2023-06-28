import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
      }}
      >
        <div style={{ paddingRight: 20, paddingBottom: 5 }}>
          <img src={data.icon} width={40} height={40} style={{ borderRadius: '5px' }} alt="" />
        </div>
        <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      </div>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
