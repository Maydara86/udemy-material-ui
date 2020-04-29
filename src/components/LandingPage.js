import React from 'react'
import Lottie from 'react-lottie'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import animationData from '../animations/landinganimation/data'
import ButtonArrow from './ui/ButtonArrow'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '25em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}))

export default function LandingPage() {
  const classes = useStyles()
  const theme = useTheme()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing westcoast technology
              <br />
              to the midwest
            </Typography>
            <Grid container className={classes.buttonContainer} justify="center">
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnButtonHero} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow height={15} width={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
