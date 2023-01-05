import Head from 'next/head';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children, title }) => {
  console.log(title);
  return (
    <>
      <Head>
        <title> {title ? title + ' - Task Handler' : 'Task Handler'}</title>
        <meta rel="icon" content="Task Handler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  );
};

export default Layout;
