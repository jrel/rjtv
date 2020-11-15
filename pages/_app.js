import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <section className='flex-col md:flex-row flex items-center md:justify-between mt-10 mb-4'>
        <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
          RJTV.
        </h1>
      </section>
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  );
}
