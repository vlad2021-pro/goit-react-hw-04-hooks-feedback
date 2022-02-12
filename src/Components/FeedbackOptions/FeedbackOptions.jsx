import React from "react";

import { BtnRewie } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map((option) => (
      <BtnRewie
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </BtnRewie>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
