import React from "react";
import { FeedbackSection, FeedbackSectionTitle } from "./Sectinon.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackSectionTitle>{title}</FeedbackSectionTitle>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
