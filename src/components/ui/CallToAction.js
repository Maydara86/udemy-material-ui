import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyle = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5em',
    marginRight: '5em',
  },
}))

export default function CallToAction() {
  const classes = useStyle()
  const theme = useTheme()

  return (
    <Grid
      container
      alignItems="center"
      className={classes.background}
      justify="space-between"
    >
      <Grid item style={{ marginLeft: '5em' }}>
        <Grid container direction="column">
          <Typography variant="h2">
            Simple Software.
            <br />
            Rrevolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: '1.5em' }}>
            Take advantage of the 21st Centery.
          </Typography>
          <Grid container item>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow height={10} width={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button className={classes.estimateButton}>Free Estimate</Button>
      </Grid>
    </Grid>
  )
}
