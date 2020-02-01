import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TwoModuleRow = ({ modules = [] }) => (
  <>
    <Row>
      {modules.map(Mod => (
        <Mod />
      ))}
    </Row>
  </>
);

export default TwoModuleRow;
