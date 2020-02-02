import React from 'react';
import styled from 'styled-components';
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
    <SideBar />
    <Content />
  </Layout>
);

export default Application;
