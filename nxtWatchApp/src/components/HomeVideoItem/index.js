import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavLink,
  ListItem,
  ThumbnailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoItem = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channelName,
    profileImageUrl,
  } = video

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title key={title} color={color}>
                    {title}
                  </Title>
                  <ChannelName color={color}>{channelName}</ChannelName>
                  <ViewsAndDate color={color}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoItem
