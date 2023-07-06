import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';
import CategoryButton from './Skills/CategoryButton';

const ARTIFICIAL_INTELLIGENCE_COURSE_TYPE = 'Artificial Intelligence';
const MATHEMATICS_COURSE_TYPE = 'Mathematics';

const Courses = ({ courses, categoryOrdering }) => {
  const [courseType, setCourseType] = useState(ARTIFICIAL_INTELLIGENCE_COURSE_TYPE);
  const initCourseTypes = () => (
    categoryOrdering.reduce((obj, key) => ({
      ...obj,
      [key]: ARTIFICIAL_INTELLIGENCE_COURSE_TYPE === key,
    }), {})
  );

  const [courseTypes, setCourseTypes] = useState(initCourseTypes());
  const getButtons = () => (
    Object.keys(courseTypes).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={courseTypes}
        handleClick={(e) => {
          setCourseType(e);
          setCourseTypes((prev) => (Object.keys(prev).reduce((acc, button) => {
            acc[button] = button === e;
            return acc;
          }, {})));
        }}
      />
    )));
  const getRows = () => courses.sort((a, b) => {
    let ret = 0;
    const aNumber = a.number.split(' ');
    const bNumber = b.number.split(' ');
    let [courseNameA, courseNameB] = [aNumber[0], bNumber[0]];
    const [courseNumberA, courseNumberB] = [parseInt(aNumber[1], 10), parseInt(bNumber[1], 10)];
    if (courseType === MATHEMATICS_COURSE_TYPE) {
      const temp = courseNameA;
      courseNameA = courseNameB;
      courseNameB = temp;
    }
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (courseNameA > courseNameB) ret = 1;
    else if (courseNameA < courseNameB) ret = -1;
    else if (courseNumberA < courseNumberB) ret = 1;
    else if (courseNumberA > courseNumberB) ret = -1;
    return ret;
  }).filter((course) => course.category.includes(courseType))
    .map((course, idx) => (
      // TODO: Add papers
      <Course
        data={course}
        key={course.title}
        last={idx === courses.length - 1}
      />
    ));

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h2>Selected Courses</h2>
        <p>Courses are filtered to show only the most relevant ones
          to a particular topic.
        </p>
      </div>
      <div className="courses-button-container">
        {getButtons()}
      </div>
      <ul className="course-list">
        {getRows()}
      </ul>
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
  categoryOrdering: PropTypes.arrayOf(PropTypes.string),
};

Courses.defaultProps = {
  courses: [],
  categoryOrdering: [],
};

export default Courses;
