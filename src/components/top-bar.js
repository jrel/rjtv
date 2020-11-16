import cn from 'classnames';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const TopBar = ({ onMobileNavOpen, className, back, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={cn(classes.root, className)} {...rest}>
      <Toolbar>
        <Hidden lgUp>
          {back ? (
            <Link href='/'>
              <IconButton
                component='a'
                edge='start'
                className={classes.menuButton}
                color='inherit'
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          ) : (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              onClick={onMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Hidden>
        <Typography variant='h6'>RJTV</Typography>
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
