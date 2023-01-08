import React, { useContext } from 'react'
import classes from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from "@mui/icons-material/Search"
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { logo } from '../../utils/constants'
import { StateCtx } from '../../ctx/State'

const Navbar = () => {
  const {setShowSidebar, showSidebar} = useContext(StateCtx)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }
  
  console.log(showSidebar)

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.leftSide}>
                <MenuIcon onClick={toggleSidebar} className={classes.menuIcon}/>
                <img src={logo} alt="" />
            </div>
            <div className={classes.centerSide}>
                <input type="text" placeholder='Search...'/>
                <SearchIcon className={classes.searchIcon}/>
            </div>
            <div className={classes.rightSide}>
                <VideoCameraBackIcon />
                <NotificationsNoneIcon />
                <div className={classes.profileCircle}>
                    <span>W</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar