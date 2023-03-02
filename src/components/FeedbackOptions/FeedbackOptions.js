import PropTypes from 'prop-types';
import { Button, FeedbackList, FeedbackItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <FeedbackList>
      {options.map(option => (
        <FeedbackItem key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </FeedbackItem>
      ))}
    </FeedbackList>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
