import { moduleMap } from './Modules';

const { triangle, square, circle, ruby, python } = moduleMap;
const levels = {
  level1: {
    TopRow: [triangle, square],
    BottomRow: [circle, ruby, python],
  },
  level2: {
    TopRow: [triangle],
    BottomRow: [circle],
  },
  level3: {
    TopRow: [square, triangle, ruby],
    BottomRow: [circle, python],
  },
};

export default levels;
