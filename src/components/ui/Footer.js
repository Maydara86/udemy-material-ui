import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    // height: '13em',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container position="column">
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Mobile App Development
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              The revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Contact US
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        className={classes.adornment}
        alt="Footer decorative slash"
        src={footerAdornment}
      />
    </footer>
  )
}