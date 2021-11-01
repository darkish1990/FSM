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
      const parsedJson = JSON.parse(code);
      const validatedJson = schema.validate(parsedJson, {
        presence: "required",
      });
      if (!validatedJson.error) {
        setFSM(new FSM(parsedJson));
      } else {
        setParsingError(validatedJson.error);
      }
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
