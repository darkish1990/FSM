import React, { useState } from 'react'
import { ActionStackContainer, Button, Container, DropDownButton, DropDownContainer, DropDownContent, StackContainer } from './StyledOutput';

const Output = ({transition,filteredFsm,state,actionsStack,setActionsStack}) => {
    const possibilities = filteredFsm?.states[state]?.transitions
    const mappedPossibilities = Object.keys(possibilities)
    console.log({mappedPossibilities});
    const [dropDownHovered, setDropDownHovered] = useState(false)
    return (
        <Container>
            <DropDownContainer  onMouseLeave={()=>setDropDownHovered(false)}>
            <DropDownButton onMouseEnter={()=>setDropDownHovered(true)}>Select Next State</DropDownButton>
                 {dropDownHovered&& <DropDownContent >
                      {possibilities && mappedPossibilities.map((posibility,index)=>{
                            return<Button key={index} onClick={()=>{
                                setActionsStack([...actionsStack,{state,nextPossibleState:filteredFsm?.states[state]?.transitions,selected:posibility}])
                                transition(posibility)
                            }}>{posibility}</Button>
                        })}
                 </DropDownContent>
                }
            </DropDownContainer><ActionStackContainer>
                {actionsStack.map((item,index)=>{
                    const {state,nextPossibleState,selected} = item
                    return <StackContainer key={index}>current state : {state.toUpperCase()} next possible states :[{Object.keys(nextPossibleState).toString()}] selected: {selected}
                    </StackContainer>
                })}</ActionStackContainer>
       </Container>
    )
}

export default Output
