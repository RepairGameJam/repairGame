import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import Content from './content/Content';
import SideBar from './sidebar/SideBar';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-align: center;
  height: 100vh;
`;

const Application = () => (
  <Layout>
    <DndProvider backend={Backend}>
      <SideBar />
      <Content />
    </DndProvider>
  </Layout>
);

export default Application;
