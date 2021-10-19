import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      {total > 0 ? (
        <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total}</span>
          </p>
          <p>
            Positive Feedback: <span>{positivePercentage} % </span>
          </p>
        </div>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
