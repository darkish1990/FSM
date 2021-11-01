import styled from "styled-components";

const DROPDOWN_CONTAINER_HEIGHT = "120px";

export const DropDownContainer = styled.div`
  height: ${DROPDOWN_CONTAINER_HEIGHT};
  width: 160px;
  overflow: auto;
`;
export const ActionStackContainer = styled.div`
  overflow: auto;
  max-height: calc(100% - ${DROPDOWN_CONTAINER_HEIGHT});
`;
export const StackContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: whitesmoke;
  color: grey;
  height: 50px;
  font-weight: 800;
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 120px;
  overflow: auto;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: #ddd;
`;

export const DropDownButton = styled.button`
  color: white;
  height: 50px;
  padding: 16px;
  font-size: 16px;
  border: none;
  background-color: grey;
`;
export const Button = styled.button`
  min-height: 30px;
  width: 100%;
  font-weight: 600;
  background-color: white;
  border: none;
  color: grey;
  transition: 0.3s;
  &:hover {
    background-color: grey;
    color: white;
    opacity: 0.8;
  }
`;
