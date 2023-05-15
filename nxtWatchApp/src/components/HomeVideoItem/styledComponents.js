import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: none;
  width: 100%;
  margin-right: 10px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 340px;
    margin-bottom: 30px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 10px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  line-height: 1.5;
  margin: 0px;
  padding-top: 10px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled(ChannelName)`
  font-size: 12px;
  margin: 0px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
`
