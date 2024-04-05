import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Gabriel Bizzi is an avid full stack senior web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="gabriel bizzi, bizzi, gabriel, web developer portfolio, bizzi web developer, gabriel developer, senior stack, gabriel bizzi portfolio"
      />
      <meta property="og:title" content="Gabriel Bizzi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack senior developer building websites that you'd like to use."
      />

    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Gabriel Bizzi',
};
