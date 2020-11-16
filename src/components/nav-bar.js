import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core';
import NavItem from './nav-item';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import BarChartIcon from '@material-ui/icons/BarChart';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },

  {
    href: '/app/products',
    icon: ShoppingBasketIcon,
    title: 'Products',
  },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login',
  },
  {
    href: '/404',
    icon: ErrorOutlineIcon,
    title: 'Error',
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  const content = (
    <Box height='100%' display='flex' flexDirection='column'>
      <Box alignItems='center' display='flex' flexDirection='column' p={2}>
        <Avatar
          className={classes.avatar}
          //   component={RouterLink}
          src={user.avatar}
          to='/app/account'
        />
        <Typography className={classes.name} color='textPrimary' variant='h5'>
          {user.name}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor='left'
          classes={{ paper: classes.desktopDrawer }}
          open
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
