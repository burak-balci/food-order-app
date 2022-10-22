import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
