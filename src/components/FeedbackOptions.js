import React from 'react';
import './FeedbackOptions.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback__controls">
      {options.map(name => (
        <button
          type="button"
          name={name}
          onClick={onLeaveFeedback}
          className="feedback__button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
export default FeedbackOptions;
