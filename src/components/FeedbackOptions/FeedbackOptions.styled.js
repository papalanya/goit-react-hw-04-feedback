import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 20px;
  background-color: lightslategray;
  border-radius: 15px;

  font-weight: 700;
  color: aliceblue;

  cursor: pointer;

  transition: background-color 300ms;
  :hover {
    background-color: rgb(56, 56, 56);
  }
`;

export const FeedbackList = styled.ul`
  display: inline-flex;
`;

export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;
