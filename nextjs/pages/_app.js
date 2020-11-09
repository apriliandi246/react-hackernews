import Nav from "../components/Nav";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/container.css";
import "../styles/data.css";

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Nav />

         <div className="container">
            <div className="data-container">
               <Component {...pageProps} />
            </div>
         </div>
      </>
   );
}
