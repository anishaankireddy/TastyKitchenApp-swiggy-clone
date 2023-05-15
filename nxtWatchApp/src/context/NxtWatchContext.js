import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  setActiveTab: () => {},
  toggledTheme: () => {},
  addVideo: () => {},
})

export default ThemeContext
