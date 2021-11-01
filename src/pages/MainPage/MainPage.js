import React, { useState } from "react";
import { FSM } from "../../fsm";
import { useFSM } from "../../fsm/fsm-react";
import Input from "../../components/Input/Input";
import Output from "../../components/Output/Output";
import {
  LeftContainer,
  OuterContainer,
  RightContainer,
} from "./StyledMainPage";
import { getFilteredFsm, initalFsm, schema } from "../../utils/utils";

const MainPage = () => {
  const [fsm, setFSM] = useState(() => new FSM(initalFsm));
  const [actionsStack, setActionsStack] = useState([]);
  const { state: fsmState, transition } = useFSM(fsm);
  const filteredFsm = getFilteredFsm(fsm);
  const [parsingError, setParsingError] = useState(null);
  const clickHandler = (code) => {
    setParsingError(null);
    try {
      schema.validate(code);
      const parsedJson = JSON.parse(code);
      setFSM(new FSM(parsedJson));
    } catch (e) {
      setParsingError(e);
    }
  };

  return (
    <OuterContainer>
      <LeftContainer>
        <Input
          parsingError={parsingError}
          filteredFsm={filteredFsm}
          clickHandler={clickHandler}
        />
      </LeftContainer>
      <RightContainer>
        <Output
          transition={transition}
          filteredFsm={filteredFsm}
          state={fsmState}
          actionsStack={actionsStack}
          setActionsStack={setActionsStack}
        />
      </RightContainer>
    </OuterContainer>
  );
};

export default MainPage;
