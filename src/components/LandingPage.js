import React from 'react'
import Lottie from 'react-lottie'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import animationData from '../animations/landinganimation/data'
import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'

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
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
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
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
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
        {' '}
        {/*____Hero Block____*/}
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
      <Grid item>
        {/*____Service Block____*/}
        <Grid container>
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow height={10} width={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img alt="custom software icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
