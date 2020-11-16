import database from '../src/config/database';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TopBar from '../src/components/top-bar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: -theme.spacing(1),
    },
    topBar: {
      backgroundColor: theme.palette.common.black,
    },
    card: {
      borderRadius: 0,
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function Page({ episode, onMobileNavOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar className={classes.topBar} back />
      <Card className={classes.card} elevation={0} raised>
        <CardMedia
          component='video'
          src='https://www.w3schools.com/tags/movie.mp4'
          controls
          autoPlay
        />
        <CardHeader
          avatar={<Avatar className={classes.avatar}>1</Avatar>}
          title='{episode.title}'
          subheader='{episode.date}'
        ></CardHeader>
      </Card>
    </div>
  );
}

export async function getStaticPaths() {
  const db = await database();

  return {
    paths: await db
      .collection('videos')
      .find({})
      .project({ slug: true })
      .map((doc) => {
        return { params: doc };
      })
      .toArray(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const db = await database();

  return {
    props: {
      video: await db
        .collection('videos')
        .find({
          slug: params.slug,
        })
        .project({ slug: true })
        .map((doc = { params: doc }))
        .toArray(),
    },
  };
}
