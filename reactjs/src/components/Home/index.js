import { useState, useEffect } from "react";
import Data from "../Data";
import Spinner from "../Spinner";

export default function Home() {
   const [news, setNews] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("https://node-hnapi.herokuapp.com/news");
         setNews(await res.json());
      }

      fetchData();
   }, []);

   return <>{news.length === 0 ? <Spinner /> : <Data data={news} />}</>;
}
