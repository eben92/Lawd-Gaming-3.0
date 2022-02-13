import { Html, Head, Main, NextScript } from "next/document";
const myDocument = () => {
  return (
    <Html className='dark'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;600;800;900&family=Poppins:wght@300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className=' dark:bg-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default myDocument;
