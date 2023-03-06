import Head from "next/head";
import Menu from "@/components/Menu";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanna Håkanson Portfolio</title>
        <meta name="description" content="Hanna Håkanson Portfolio" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.Root__main}>
        <Menu />
      </main>
    </>
  );
}
