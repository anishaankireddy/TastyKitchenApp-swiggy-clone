import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
export const FailureViewImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const FailureViewHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
`
export const FailureViewNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  font-size: 15px;
  font-family: roboto;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  background-color: #4f46e5;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
