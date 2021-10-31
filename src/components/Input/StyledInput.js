import styled from 'styled-components'


export const Container = styled.div`
padding: 32px;
display: flex;
flex-direction: column;
`
export const Title = styled.h1`
margin-right: 16px;
color:grey;
`
export const TitleContainer = styled.div`
display: flex;
align-items: center;
`
export const Button = styled.button`
    height: 30px;
    width: 140px;
    font-weight: 600;
    background-color: white;
    border: none;
    color: grey;
    transition: 0.3s;
    &:hover{
        background-color: grey;
        color: white;
        opacity: 0.8;
    }
`
export const ErrorMsg = styled.div`
  color:red;
  font-weight: 600;
`

