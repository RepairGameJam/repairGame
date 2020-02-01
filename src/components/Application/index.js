import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Board from '../Board';
import Content from './content/Content';
import SideBar from './sidebar/SideBar';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-align: center;
  height: 100vh;
`;

const Application = ({ id = 1337 }) => {
  // id of a joined room
  if (!id) return <div>Should return to Main Screen</div>;
  return (
    <Layout>
      <SideBar />
      <Content />
      <Board />
    </Layout>
  );
};

Application.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Application;
