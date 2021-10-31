import React, { useState } from 'react'
import { FSM } from '../../fsm';
import { useFSM } from '../../fsm/fsm-react';
import Input from '../../components/Input/Input'
import Output from '../../components/Output/Output'
import { LeftContainer, OuterContainer, RightContainer } from './StyledMainPage'

const initalFsm = {
    initialState: "up",
  states: {
    up: {
      transitions: {
        RIGHT: "right",
      }
    },
    right: {
      transitions: {
        DOWN: "down"
      }
    },
    down: {
      transitions: {
        LEFT: "left"
      }
    },
    left: {
      transitions: {
        UP: "up"
      }
    },
    }
  };

const MainPage = () => {
    const [fsm, setFSM] = useState(()=>new FSM(initalFsm))
    const [actionsStack, setActionsStack] = useState([])
    const { state, transition } = useFSM(fsm);
    const [parsingError, setParsingError] = useState(null)
    const clickHandler=(code)=>{
        try {
            const parsedJson = JSON.parse(code);
                setFSM(prev => {
                  const newFSMOptions = {
                    ...prev,
                    states: parsedJson
                  };
                  return new FSM(newFSMOptions);
                })
        } catch (e) {
            setParsingError(e);
        }
    }

    return (
        <OuterContainer>
            <LeftContainer><Input parsingError={parsingError} fsm={fsm} clickHandler={clickHandler}/></LeftContainer>
            <RightContainer><Output transition={transition} fsm={fsm} state={state} actionsStack={actionsStack} setActionsStack={setActionsStack}/></RightContainer>
        </OuterContainer>
    )
}

export default MainPage
