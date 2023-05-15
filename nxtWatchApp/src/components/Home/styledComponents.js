import styled from 'styled-components'

export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
export const HomeContainer = styled.div`
  min-height: 100vh;
  overflow: auto;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const BannerContainer = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  padding: 15px;
  padding-top: 0px;
  padding-bottom: 20px;
`
export const BannerLogoAndCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BannerLogo = styled.img`
  width: 130px;
  padding-top: 10px;
`
export const BannerCloseButton = styled.div`
  padding: 10px;
  margin: 0px;
  cursor: pointer;
`
export const BannerContent = styled(BannerLogoAndCloseButton)`
  justify-content: flex-start;
  flex-direction: column;
`
export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #0f0f0f;
`
export const BannerButton = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  background: none;
  border: 1px solid #0f0f0f;
  padding: 10px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 35px;
  margin: 0px;
  padding: 15px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  background: none;
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #e2e8f0;
  padding: 15px;
`
export const SearchIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 33px;
  border: none;
  cursor: pointer;
`
