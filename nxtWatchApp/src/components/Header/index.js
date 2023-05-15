import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHighFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  NavHeader,
  NavLogoContainer,
  NavLogo,
  NavMenuActionItems,
  ThemeButton,
  ProfileImage,
  HamburgerMenu,
  LogoutButtons,
  LogoutTextButton,
  LogoutIconButton,
  ModalContainer,
  PopupText,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import NxtWatchThemeContext from '../../context/NxtWatchContext'

const Header = props => (
  <NxtWatchThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const styles = {
        color: isDarkTheme === false ? ' #181818' : '#f9f9f9',
        backgroundColor: isDarkTheme === false ? '#f1f1f1' : '#212121',
      }

      return (
        <NavHeader style={styles}>
          <NavLogoContainer>
            <Link to="/">
              <NavLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
          </NavLogoContainer>
          <NavMenuActionItems>
            <ThemeButton
              type="button"
              onClick={toggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHighFill color="#ffffff" size={25} />
              ) : (
                <FaMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <HamburgerMenu>
              <GiHamburgerMenu style={styles} size={25} />
            </HamburgerMenu>
            <Popup
              modal
              trigger={
                <LogoutButtons>
                  <LogoutTextButton type="button" darkTheme={isDarkTheme}>
                    Logout
                  </LogoutTextButton>
                  <LogoutIconButton type="button">
                    <FiLogOut style={styles} size={25} />
                  </LogoutIconButton>
                </LogoutButtons>
              }
              className="popup_content"
            >
              {close => (
                <ModalContainer style={styles}>
                  <PopupText darkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </PopupText>
                  <PopupButtonsContainer>
                    <CancelButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </NavMenuActionItems>
        </NavHeader>
      )
    }}
  </NxtWatchThemeContext.Consumer>
)

export default withRouter(Header)
