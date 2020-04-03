import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <img
        className={classes.adornment}
        alt="Footer decorative slash"
        src={footerAdornment}
      />
    </footer>
  )
}
