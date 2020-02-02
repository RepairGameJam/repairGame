import { moduleMap } from './Modules';

const { triangle, square, circle, ruby, python } = moduleMap;
const levels = {
  level1: {
    TopRow: [triangle, square],
    BottomRow: [circle, ruby, python],
  },
};

export default levels;
