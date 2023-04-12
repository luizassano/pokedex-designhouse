import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/snorlax.ico" />
      </Head>

      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
