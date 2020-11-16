import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import TopBar from '../src/components/top-bar';
import database from '../src/config/database';

const useStyles = makeStyles((theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
      borderRadius: 0,
      marginBottom: theme.spacing(2),
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function Page({ videos }) {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      {videos.map((episode) => (
        <Link href={episode.slug} key={episode.slug}>
          <Card className={classes.card} elevation={0} raised>
            <CardMedia
              className={classes.media}
              image={episode.image}
              title={episode.title}
            />
            <CardHeader
              avatar={<Avatar className={classes.avatar}>1</Avatar>}
              title={episode.title}
              subheader={episode.date}
            ></CardHeader>
          </Card>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const db = await database();

  return {
    props: {
      videos: JSON.parse(
        JSON.stringify(await db.collection('videos').find({}).toArray())
      ),
    },
  };
}
