import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ThreeModuleRow = ({ modules = [] }) => <Row>{modules}</Row>;

export default ThreeModuleRow;
