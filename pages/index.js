import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import TopBar from '../src/components/top-bar';

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

export default function Page({ episodes }) {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      {episodes.map((episode) => (
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

export function getStaticProps() {
  return {
    props: {
      episodes: [
        {
          slug: '1',
          image: 'https://dummyimage.com/300/f0912b/000000.png',
          title: 'teste1',
          date: 'teste1',
        },
        {
          slug: '2',
          image: 'https://dummyimage.com/300/f0912b/000000.png',
          title: 'teste2',
          date: 'teste2',
        },
        {
          slug: '3',
          image: 'https://dummyimage.com/300/f0912b/000000.png',
          title: 'teste3',
          date: 'teste3',
        },
      ],
    },
  };
}
