import React, { useContext } from 'react'
import classes from './menu.module.css'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutLinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { StateCtx } from '../../ctx/State'

const Menu = () => {
  const { showSidebar } = useContext(StateCtx)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {showSidebar ? (
          <div className={classes.toggledWrapper}>
            <div className={classes.toggledItem}>
              <HomeIcon /> <span>Home</span>
            </div>
            <div className={classes.toggledItem}>
              <ExploreOutLinedIcon /> <span>Explore</span>
            </div>
            <div className={classes.toggledItem}>
              <SubscriptionsOutlinedIcon /> <span>Subcriptions</span>
            </div>
            <div className={classes.toggledItem}>
              <VideoLibraryOutlinedIcon /> <span>Library</span>
            </div>
          </div>
        ) : (
          <>
            <div className={classes.item}>
              <HomeIcon /> <span>Home</span>
            </div>
            <div className={classes.item}>
              <ExploreOutLinedIcon /> <span>Explore</span>
            </div>
            <div className={classes.item}>
              <SubscriptionsOutlinedIcon /> <span>Subcriptions</span>
            </div>
            <div className={classes.item}>
              <VideoLibraryOutlinedIcon /> <span>Library</span>
            </div>
            <div className={classes.item}>
              <HistoryOutlinedIcon /> <span>History</span>
            </div>
            <hr className={classes.hr} />
            <div className={classes.signIn}>
              <span className={classes.signInText}>
                Sign in to like videos, comment and subscribe.
              </span>
              <div className={classes.signInContainer}>
                <AccountCircleOutlinedIcon className={classes.emoji} />
                <span>SIGN IN</span>
              </div>
            </div>
            <hr className={classes.hr} />
            <h3 className={classes.heading}>BEST OF OUR PLATFORM</h3>
            <div className={classes.item}>
              <LibraryMusicOutlinedIcon /> <span>Music</span>
            </div>
            <div className={classes.item}>
              <SportsBasketballOutlinedIcon /> <span>Sports</span>
            </div>
            <div className={classes.item}>
              <SportsEsportsOutlinedIcon /> <span>Gaming</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Menu