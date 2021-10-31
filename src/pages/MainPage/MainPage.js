import React, { useRef, useState } from 'react'
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
        TOGGLE: "right",
      }
    },
    right: {
      transitions: {
        TOGGLE: "down"
      }
    },
    down: {
      transitions: {
        TOGGLE: "left"
      }
    },
    left: {
      transitions: {
        TOGGLE: "up"
      }
    },
    }
  };

  const checkValidationForJsonObj=(jsonObj)=>{
    if (!jsonObj.initialState) {
        return false
   }
  //  for (const iterator in jsonObj.states) {
  //    console.log(iterator);
  //   if (!iterator.transitions) {
  //     return false
  //   }
  //  }
   
      return true
  }

const MainPage = () => {
    const [fsm, setFSM] = useState(initalFsm)
    const { state, error, transition } = useFSM(new FSM(fsm));
    console.log(state);
    const [parsingError, setParsingError] = useState(null)
    const clickHandler=(code)=>{
        try {
            const parsedCode = JSON.parse(code);
            if (!checkValidationForJsonObj(parsedCode)) {
              setParsingError('code is not a valid')
                }
                setFSM(parsedCode)
        } catch (e) {
            setParsingError(e);
        }
    }

    return (
        <OuterContainer>
            <LeftContainer><Input parsingError={parsingError} fsm={fsm} clickHandler={clickHandler}/></LeftContainer>
            <RightContainer><Output transition={transition} fsm={fsm} state={state}/></RightContainer>
        </OuterContainer>
    )
}

export default MainPage
