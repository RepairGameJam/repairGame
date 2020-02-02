import React from 'react';
import styled from 'styled-components';
import Circuits from './Circuits';
import Score from './Score';

const SideBarWrapper = styled.div`
  background-color: rgba(180, 180, 180, 1);
  flex-grow: 4;
  display: flex;
  flex-direction: column;
`;

const SideBar = () => (
  <SideBarWrapper>
    <Circuits />
    <Score />
  </SideBarWrapper>
);

export default SideBar;
