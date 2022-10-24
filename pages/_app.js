import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  console.log(route);
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Component {...pageProps} />
      </main>
      {route !== "/signin" && (
        <footer className="footer">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default MyApp;
