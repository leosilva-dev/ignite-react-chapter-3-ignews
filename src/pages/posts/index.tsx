import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              ipsum obcaecati architecto sit reprehenderit sapiente! Eaque nulla
              et aut, provident qui tenetur adipisci esse culpa, minima
              doloribus nesciunt facere ipsum.
            </p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              ipsum obcaecati architecto sit reprehenderit sapiente! Eaque nulla
              et aut, provident qui tenetur adipisci esse culpa, minima
              doloribus nesciunt facere ipsum.
            </p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              ipsum obcaecati architecto sit reprehenderit sapiente! Eaque nulla
              et aut, provident qui tenetur adipisci esse culpa, minima
              doloribus nesciunt facere ipsum.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
