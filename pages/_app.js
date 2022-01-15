import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { DataProvider } from "../store/GlobalState";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
