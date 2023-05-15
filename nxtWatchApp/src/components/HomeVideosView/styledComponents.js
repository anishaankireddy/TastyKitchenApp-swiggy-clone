import styled from 'styled-components'

export const HomeVideoItemList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 15px;
`
export const NoResultsView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
export const NoResultsImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const NoResultsHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
`
export const NoResultsNote = styled.p`
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
