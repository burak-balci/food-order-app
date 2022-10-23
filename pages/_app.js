import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
