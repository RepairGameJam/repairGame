import React from "react";
import { Module1, Module2, Module3 } from "./Modules";
import TwoModuleRow from "./Containers/TwoModuleRow";
import ThreeModuleRow from "./Containers/ThreeModuleRow";

const levels = {
  level1: {
    TopRow: () => <TwoModuleRow modules={[Module1, Module2]} />,
    BottomRow: () => <ThreeModuleRow modules={[Module1, Module2, Module3]} />
  }
};

export default levels;
