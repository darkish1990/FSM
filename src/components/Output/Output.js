import React, { useState } from 'react'
import { Button, Container, DropDownButton, DropDownContainer, DropDownContent } from './StyledOutput';

const Output = ({transition,fsm,state}) => {
    const possibilities = fsm?.states[state]?.transitions
    const mappedPossibilities = Object.entries(possibilities)
    const [dropDownHovered, setDropDownHovered] = useState(false)
    return (
        <Container>
            <DropDownContainer onMouseEnter={()=>setDropDownHovered(true)} onMouseLeave={()=>setDropDownHovered(false)}>
            <DropDownButton>selectNextState</DropDownButton>
                 {dropDownHovered&& <DropDownContent class="dropdown-content">
                      {possibilities && mappedPossibilities.map((posibility)=>{
                            return<Button onClick={()=>{transition(posibility[0])}}>{posibility[0]}</Button>
                        })}
                 </DropDownContent>
                }
            </DropDownContainer>
       </Container>
    )
}

export default Output
