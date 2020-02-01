import React from 'react';
import PropTypes from 'prop-types';
import Main from './components/MainScreen/index';

const App = ({ message }) => (
  <div className="App">
    <Main />
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
