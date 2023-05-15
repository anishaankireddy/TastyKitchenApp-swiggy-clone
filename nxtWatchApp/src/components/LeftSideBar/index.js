import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchThemeContext from '../../context/NxtWatchContext'
import {
  NavBarContainer,
  LeftSideBarDesktopContainer,
  SideBarOptions,
  SideBarLink,
  SideBarOption,
  OptionText,
  ContactContainer,
  ContactHeading,
  ContactImages,
  ContactImage,
  ContactNote,
  DownBarMobileContainer,
} from './styledComponents'

const LeftSideBar = () => (
  <NxtWatchThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, setActiveTab} = value
      const Styles = {
        color: isDarkTheme ? '#f9f9f9' : '#181818',
        backgroundColor: isDarkTheme ? '#212121' : '#f1f1f1',
      }
      const activeTabBgColor = isDarkTheme ? '#383838' : '#f1f5f9'

      return (
        <NavBarContainer>
          <LeftSideBarDesktopContainer style={Styles}>
            <SideBarOptions>
              <SideBarLink to="/">
                <SideBarOption
                  key="home"
                  active={activeTab === 'Home' ? activeTabBgColor : ''}
                  onClick={() => setActiveTab('Home')}
                >
                  <AiFillHome
                    size={20}
                    color={activeTab === 'Home' ? '#ff0000' : '#928F91'}
                  />
                  <OptionText
                    active={activeTab === 'Home'}
                    color={Styles.color}
                  >
                    Home
                  </OptionText>
                </SideBarOption>
              </SideBarLink>
              <SideBarLink to="/trending">
                <SideBarOption
                  key="trending"
                  active={activeTab === 'Trending' ? activeTabBgColor : ''}
                  onClick={() => setActiveTab('Trending')}
                >
                  <HiFire
                    size={20}
                    color={activeTab === 'Trending' ? '#ff0000' : '#928F91'}
                  />
                  <OptionText
                    active={activeTab === 'Trending'}
                    color={Styles.color}
                  >
                    Trending
                  </OptionText>
                </SideBarOption>
              </SideBarLink>
              <SideBarLink to="/gaming">
                <SideBarOption
                  key="gaming"
                  active={activeTab === 'Gaming' ? activeTabBgColor : ''}
                  onClick={() => setActiveTab('Gaming')}
                >
                  <SiYoutubegaming
                    size={20}
                    color={activeTab === 'Gaming' ? '#ff0000' : '#928F91'}
                  />
                  <OptionText
                    active={activeTab === 'Gaming'}
                    color={Styles.color}
                  >
                    Gaming
                  </OptionText>
                </SideBarOption>
              </SideBarLink>
              <SideBarLink to="/saved-videos">
                <SideBarOption
                  key="savedVideos"
                  active={activeTab === 'Saved videos' ? activeTabBgColor : ''}
                  onClick={() => setActiveTab('Saved videos')}
                >
                  <CgPlayListAdd
                    size={20}
                    color={activeTab === 'Saved videos' ? '#ff0000' : '#928F91'}
                  />
                  <OptionText
                    active={activeTab === 'Saved videos'}
                    color={Styles.color}
                  >
                    Saved videos
                  </OptionText>
                </SideBarOption>
              </SideBarLink>
            </SideBarOptions>
            <ContactContainer>
              <ContactHeading>CONTACT US</ContactHeading>
              <ContactImages>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactImages>
              <ContactNote>
                Enjoy! Now to see your channels and recommendations!
              </ContactNote>
            </ContactContainer>
          </LeftSideBarDesktopContainer>
          <DownBarMobileContainer style={Styles}>
            <SideBarLink to="/">
              <SideBarOption key="home" onClick={() => setActiveTab('Home')}>
                <AiFillHome
                  size={30}
                  color={activeTab === 'Home' ? '#ff0000' : '#928F91'}
                />
              </SideBarOption>
            </SideBarLink>
            <SideBarLink to="/trending">
              <SideBarOption
                key="trending"
                onClick={() => setActiveTab('Trending')}
              >
                <HiFire
                  size={30}
                  color={activeTab === 'Trending' ? '#ff0000' : '#928F91'}
                />
              </SideBarOption>
            </SideBarLink>
            <SideBarLink to="/gaming">
              <SideBarOption
                key="gaming"
                onClick={() => setActiveTab('Gaming')}
              >
                <SiYoutubegaming
                  size={30}
                  color={activeTab === 'Gaming' ? '#ff0000' : '#928F91'}
                />
              </SideBarOption>
            </SideBarLink>
            <SideBarLink to="/saved-videos">
              <SideBarOption
                key="savedVideos"
                onClick={() => setActiveTab('Saved videos')}
              >
                <CgPlayListAdd
                  size={30}
                  color={activeTab === 'Saved videos' ? '#ff0000' : '#928F91'}
                />
              </SideBarOption>
            </SideBarLink>
          </DownBarMobileContainer>
        </NavBarContainer>
      )
    }}
  </NxtWatchThemeContext.Consumer>
)

export default LeftSideBar
