import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: 576px) {
    max-width: 350px;
  }
`
export const LogoImage = styled.img`
  width: 185px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    width: 165px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  line-height: 16px;
  margin-bottom: 0px;
  padding-left: ${props => (props.paddingLeft ? '5px' : null)};
`
export const InputElement = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  align-self: start;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
