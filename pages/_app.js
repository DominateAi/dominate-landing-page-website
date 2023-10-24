import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/style.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 300,
});

Router.onRouteChangeStart = () => {
  NProgress.inc();
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

// Router.onRouteChangeError = () => {
//   NProgress.done();
// };

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
