import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../context/store";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const routeCondition = ["/", "/signin", "/signup", "/basket"];

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
