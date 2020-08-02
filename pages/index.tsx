import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>MediaBase</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">Velkommen til MediaBase</h1>

          <p className="description">
            Her kan du lage deg en oversikt over forskjellige medier du har sett
            eller ønsker å se. F.eks bøker, spill og tv-serier.
          </p>

          <div className="grid">
            <Link href="/games">
              <a className="card">
                <h3>Spill &rarr;</h3>
                <p>
                  Lag deg en oversikt over spill du ønsker å spille, og hva du
                  har spilt sammen med en liten anmeldelse om du ønsker.
                </p>
              </a>
            </Link>

            <Link href="https://nextjs.org/learn">
              <a className="card">
                <h3>Bøker &rarr;</h3>
                <p>
                  Her kan du lage en liste over bøker du har lest og bøker du
                  ønsker å lese.
                </p>
              </a>
            </Link>

            <Link href="https://github.com/zeit/next.js/tree/master/examples">
              <a className="card">
                <h3>Filmer &rarr;</h3>
                <p>Filmer du vil se.</p>
              </a>
            </Link>

            <Link href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <a className="card">
                <h3>TV-serier &rarr;</h3>
                <p>TV-serier du vil se.</p>
              </a>
            </Link>
          </div>
        </main>

        <footer>Laget av Nicolai Berthelsen</footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
