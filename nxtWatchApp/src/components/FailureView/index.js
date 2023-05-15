import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
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
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImageUrl} alt="failure view" />
            <FailureViewHeading color={styles.headingColor}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewNote color={styles.noteColor}>
              We are having some trouble to complete your request.
              <br /> Please try again later.
            </FailureViewNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
