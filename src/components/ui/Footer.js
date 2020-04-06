import React from 'react'
import { Link } from 'react-router-dom'
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
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}))

export default function Footer({ value, setValue, selectedIndex, setSelectedIndex }) {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container position="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              Home
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1)
                setSelectedIndex(0)
              }}
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1)
                setSelectedIndex(1)
              }}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1)
                setSelectedIndex(2)
              }}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1)
                setSelectedIndex(3)
              }}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              The revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              About US
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              Team
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
            >
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
