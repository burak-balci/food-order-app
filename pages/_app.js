import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const routeCondition = ["/", "/signin", "/signup"];
  console.log(route);
  return (
    <div className="container">
      {route !== "/" && (
        <header className="header">
          <Header />
        </header>
      )}
      <main className="main">
        <Component {...pageProps} />
      </main>
      {!routeCondition.includes(route) && (
        <footer className="footer">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default MyApp;
