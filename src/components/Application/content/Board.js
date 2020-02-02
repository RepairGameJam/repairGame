import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LEVELS from '../../LEVELS';
import { Module, moduleMap } from '../../Modules';

const BoardWrapper = styled.div`
  flex-grow: 9;
  margin: 3em 5em;
  background-image: url('circuit-texture.png');
  background-repeat: repeat;
  border-style: solid;
  border-width: 5px;
  position: relative;
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomModule = count => {
  const res = [];
  const possible = new Set([...Object.keys(moduleMap)]);
  let max = Object.keys(moduleMap).length - 1;
  while (res.length < count) {
    const random = getRandomInt(0, max);
    const arrayPossible = [...possible];
    // console.log('TCL: arrayPossible', arrayPossible);
    const selectedKey = arrayPossible[random];
    // console.log('TCL: selectedKey', selectedKey);
    const moduleItem = moduleMap[selectedKey];
    // console.log('TCL: moduleItem', moduleItem);
    res.push(moduleItem);
    possible.delete(selectedKey);
    max -= 1;
  }
  console.log('TCL: res', res);
  return res;
};

const Board = () => {
  const level = useSelector(state => state.game.level);
  const allPieces = useMemo(() => getRandomModule(LEVELS[level].TopRow + LEVELS[level].BottomRow), [level]);
  const TopRow = useMemo(() => [...allPieces.slice(0, LEVELS[level].TopRow)], [allPieces, level]);
  const BottomRow = useMemo(
    () => [...allPieces.slice(LEVELS[level].TopRow, LEVELS[level].TopRow + LEVELS[level].BottomRow)],
    [allPieces, level]
  );
  return (
    <BoardWrapper>
      {TopRow && TopRow.map(item => <Module {...item} />)}
      {BottomRow && BottomRow.map(item => <Module {...item} />)}
      {/* {Object.keys(moduleMap).map(key => (
        <Module {...moduleMap[key]} />
      ))} */}
    </BoardWrapper>
  );
};
export default Board;
