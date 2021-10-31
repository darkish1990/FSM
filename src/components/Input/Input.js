import React ,{useState}from 'react'
import { Button, Container, ErrorMsg,  Title, TitleContainer } from './StyledInput'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

const Input = ({ parsingError,fsm,clickHandler }) => {
   const [code, setCode] = useState(JSON.stringify(fsm.states,undefined,2))
    return (
        
        <Container>
          <TitleContainer>
          <Title>FSM Editor</Title>
          <Button onClick={()=>clickHandler(code)}>Generate Fsm</Button>
          </TitleContainer>
        
        {parsingError&&<ErrorMsg>this is not a valid json</ErrorMsg>}
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            minHeight: '500px',
            overflow: 'auto',
            fontSize: '20px',
          }}
        />
        </Container>
    )
}

export default Input
