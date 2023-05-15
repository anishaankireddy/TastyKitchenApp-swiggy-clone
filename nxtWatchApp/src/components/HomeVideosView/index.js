import NxtWatchContext from '../../context/NxtWatchContext'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomeVideoItemList,
  NoResultsView,
  NoResultsImage,
  NoResultsHeading,
  NoResultsNote,
  RetryButton,
} from './styledComponents'

const HomeVideosView = props => {
  const {homeVideos, onRetry} = props
  const videoCount = homeVideos.length > 0
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const styles = {
          headingColor: isDarkTheme ? '#f1f5f9' : '#1e293b',
          noteColor: isDarkTheme ? '#e2e8f0' : '#475569',
        }

        return videoCount ? (
          <HomeVideoItemList>
            {homeVideos.map(eachVideo => (
              <HomeVideoItem video={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideoItemList>
        ) : (
          <NoResultsView>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsHeading color={styles.headingColor}>
              No Search results found
            </NoResultsHeading>
            <NoResultsNote color={styles.noteColor}>
              Try different key words or remove search filter
            </NoResultsNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoResultsView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideosView
