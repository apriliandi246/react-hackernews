import { useState, useEffect } from "react";
import Data from "../Data";
import Spinner from "../Spinner";

export default function Show() {
   const [show, setShow] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("https://node-hnapi.herokuapp.com/news");
         setShow(await res.json());
      }

      fetchData();
   }, []);

   return <>{show.length === 0 ? <Spinner /> : <Data data={show} />}</>;
}
