import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Board from '../Board';
import { useDispatch } from 'react-redux';
import Content from './content/Content';
import SideBar from './sidebar/SideBar';
import { startGameAction } from '../../reducers/gameReducer';
import LEVELS from '../LEVELS';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-align: center;
  height: 100vh;
`;

const Application = ({ id = 1337 }) => {
  // id of a joined room
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGameAction('level1'));
  }, []);
  if (!id) return <div>Should return to Main Screen</div>;
  return (
    <Layout>
      <SideBar />
      <Content />
    </Layout>
  );
};

Application.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Application;
