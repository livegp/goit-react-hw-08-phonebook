import styled from 'styled-components';

export const Form = styled.form`
  color: #3b5998;
`;

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const List = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: left;
  margin: 0 0 10px;

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`;

export const Btn = styled.button`
  background-color: #dfe3ee;
  color: #3b5998;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
