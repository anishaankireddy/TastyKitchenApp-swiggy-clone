import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  height: 60px;
  position: fixed;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`
export const NavLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const NavLogo = styled.img`
  width: 100px;
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`
export const NavMenuActionItems = styled(NavLogoContainer)`
  justify-content: space-between;
  min-width: 250px;
  @media screen and (max-width: 767px) {
    min-width: 180px;
  }
`
export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HamburgerMenu = styled(ThemeButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoutTextButton = styled(ThemeButton)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 450;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  border: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')} solid 1px;
  background-color: transparent;
  padding: 5px;
  width: 90px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIconButton = styled(ThemeButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 350px;
  height: 180px;
  border: none;
`
export const PopupText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#00306e')};
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin-top: 10px;
`

export const CancelButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #7e858e;
  border: 1px solid #7e858e;
  border-radius: 3px;
  background-color: transparent;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`

export const ConfirmButton = styled(CancelButton)`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
`
