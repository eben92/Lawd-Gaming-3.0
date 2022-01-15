import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { DataProvider } from "../store/GlobalState";
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
