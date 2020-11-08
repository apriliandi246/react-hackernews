export default function Data({ data }) {
   return (
      <>
         {data.map((eachData) => (
            <div className="data" key={eachData.id}>
               <a
                  href={eachData.url}
                  rel="noreferrer"
                  target="_blank"
                  className="data__title"
               >
                  {eachData.title}
               </a>

               <span className="data__url">{eachData.domain}</span>

               <br />

               <span className="data__points">{eachData.points} points |</span>
               <span className="data__user">by {eachData.user} |</span>
               <span className="data__time-ago">{eachData.time_ago} |</span>
               <span className="data__comments">
                  {eachData.comments_count} comments
               </span>
            </div>
         ))}
      </>
   );
}
