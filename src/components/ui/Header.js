import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import makeStyles from '@material-ui/styles/makeStyles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile Apps Development', link: '/mobileapps' },
    { name: 'Websites Development', link: '/websites' },
  ]

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }
  const handleChange = (e, value) => setValue(value)

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4)
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5)
    }
  }, [value])

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          {/* disableGutters = remove the side gaps in the toolbar edges */}
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img className={classes.logo} alt="Company Logo" src={logo} />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={(e) => handleClick(e)}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              classes={{ paper: classes.menu }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(e) => {
                    handleMenuItemClick(e, i)
                    setValue(1)
                    handleClose()
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
