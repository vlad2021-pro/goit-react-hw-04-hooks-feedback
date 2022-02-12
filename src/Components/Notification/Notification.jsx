import React from "react";
import { FeedbackNotification } from "./Notification.styled";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <FeedbackNotification>{message}</FeedbackNotification>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
