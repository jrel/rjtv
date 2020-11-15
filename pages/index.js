import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <div className='grid grid-cols-4 gap-16'>
        <section className='col-span-3'>
          <video width='100%' controls autoplay>
            <source
              src='https://www.w3schools.com/html/mov_bbb.mp4'
              type='video/mp4'
            />
            <source
              src='https://www.w3schools.com/html/mov_bbb.ogg'
              type='video/ogg'
            />
          </video>
        </section>
        <section>
          <article className='bg-orange-400 h-20'></article>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
