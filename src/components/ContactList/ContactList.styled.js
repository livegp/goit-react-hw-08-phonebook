import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  table-layout: auto;
  width: 100%;
  text-align: center;
  box-shadow:
    0 1px 6px rgb(46 47 66 / 8%),
    0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;

  th,
  td {
    padding: 10px;
  }

  th:first-child {
    width: 100%;
  }

  td:not(:first-child) {
    white-space: nowrap;
  }

  td:nth-child(-n + 2) {
    text-align: left;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: #3b5998;
    cursor: pointer;
  }

  button:hover {
    color: #ff1919;
  }
`;

export const Head = styled.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;
