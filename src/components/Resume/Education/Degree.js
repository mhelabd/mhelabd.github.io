import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header style={{ paddingBottom: 20 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 25,
      }}
      >
        <div style={{ paddingTop: 0, paddingRight: 20 }}>
          <img src={data.icon} width={30} alt="" />
        </div>
        <h4><a href={data.link}>{data.school}</a></h4>
      </div>
      {data.degrees.map((degree, i) => <h4 key={degree}>{degree}, {data.years[i]}</h4>)}
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degrees: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default Degree;
