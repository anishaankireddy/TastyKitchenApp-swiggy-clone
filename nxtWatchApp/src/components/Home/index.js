import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import LeftSideBar from '../LeftSideBar'
import HomeVideosView from '../HomeVideosView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoadingView,
  HomeContainer,
  BannerContainer,
  BannerLogoAndCloseButton,
  BannerContent,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideos: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      console.log(updatedData)
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideosView homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderFailedView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoadingView>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailedView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay === 'flex' ? 'flex' : 'none'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const styles = {
            color: isDarkTheme === false ? ' #181818' : '#f9f9f9',
            backgroundColor: isDarkTheme === false ? '#f9f9f9' : '#181818',
          }
          return (
            <>
              <Header />
              <LeftSideBar />
              <HomeContainer style={styles} data-testid="home">
                <BannerContainer display={display} data-testid="banner">
                  <BannerLogoAndCloseButton data-testid="close">
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerCloseButton
                      type="button"
                      onClick={this.onClickCloseBanner}
                      data-testid="close"
                    >
                      <AiOutlineClose size={20} color="#0f0f0f" />
                    </BannerCloseButton>
                  </BannerLogoAndCloseButton>
                  <BannerContent data-testid="close">
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br />
                      UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerContent>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchIconButton
                    type="button"
                    onClick={this.onClickSearch}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconButton>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
