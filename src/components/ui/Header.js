import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import makeStyles from '@material-ui/styles/makeStyles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    // elevation = the shaddow underneath the navbar takes value of 1..20
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          {/* disableGutters = remove the side gaps in the toolbar edges */}
          <Toolbar disableGutters>
            <img className={classes.logo} alt="Company Logo" src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
