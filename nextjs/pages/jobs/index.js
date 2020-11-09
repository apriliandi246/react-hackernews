export default function Jobs({ jobs }) {
   return (
      <>
         {jobs.map((job) => (
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
         ))}
      </>
   );
}

export async function getServerSideProps() {
   const res = await fetch("https://node-hnapi.herokuapp.com/jobs");
   const jobs = await res.json();
   return { props: { jobs } };
}
