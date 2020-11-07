import { useState, useEffect } from "react";
import Data from "../Data";
import Spinner from "../Spinner";

export default function Newest() {
   const [newest, setNewest] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("https://node-hnapi.herokuapp.com/newest");
         setNewest(await res.json());
      }

      fetchData();
   }, []);

   return <>{newest.length === 0 ? <Spinner /> : <Data data={newest} />}</>;
}
