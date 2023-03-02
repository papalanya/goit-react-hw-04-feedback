import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total > 0 ? (
    <ul>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total} </Item>
      <Item>Positive feedback: {positivePercentage} %</Item>
    </ul>
  ) : (
    <Notification message={'There is no feedback'} />
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
