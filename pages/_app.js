import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
