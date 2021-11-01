import React, { useState } from "react";
import {
  Button,
  Container,
  ErrorMsg,
  Title,
  TitleContainer,
} from "./StyledInput";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import { initalFsm } from "../../utils/utils";

const editorStyles = {
  minHeight: "500px",
  overflow: "auto",
  fontSize: "20px",
};

const Input = ({ parsingError, filteredFsm, clickHandler }) => {
  const [code, setCode] = useState(JSON.stringify(filteredFsm, undefined, 2));
  return (
    <Container>
      <TitleContainer>
        <Title>FSM Editor</Title>
        <Button onClick={() => clickHandler(code)}>Generate Fsm</Button>
        <Button
          onClick={() => setCode(JSON.stringify(initalFsm, undefined, 2))}
        >
          Return to Default
        </Button>
      </TitleContainer>

      {parsingError && (
        <ErrorMsg>
          This is not a valid schema please reffer to the default json. the
          playground hasn't changed previous fsm.
        </ErrorMsg>
      )}
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={editorStyles}
      />
    </Container>
  );
};

export default Input;
