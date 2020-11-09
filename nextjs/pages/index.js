import Data from "../components/Data";

export default function Home({ news }) {
   return <Data data={news} />;
}

export async function getServerSideProps() {
   const res = await fetch("https://node-hnapi.herokuapp.com/news");
   const news = await res.json();
   return { props: { news } };
}
