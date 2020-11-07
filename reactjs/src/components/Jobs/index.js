import { useState, useEffect } from "react";
import Spinner from "../Spinner";

export default function Jobs() {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("https://node-hnapi.herokuapp.com/jobs");
         setJobs(await res.json());
      }

      fetchData();
   }, []);

   return (
      <>
         {jobs.length === 0 ? (
            <Spinner />
         ) : (
            jobs.map((job) => (
               <div className="data" key={job.id}>
                  <a
                     href={job.url}
                     rel="noreferrer"
                     target="_blank"
                     class="data__title"
                  >
                     {job.title}
                  </a>
                  <span class="data__url">{job.domain}</span>
                  <br />
                  <span class="data__time-ago">{job.time_ago}</span>
               </div>
            ))
         )}
      </>
   );
}
