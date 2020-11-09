import Data from "../../components/Data";

export default function Newest({ newest }) {
   return <Data data={newest} />;
}

export async function getServerSideProps() {
   const res = await fetch("https://node-hnapi.herokuapp.com/newest");
   const newest = await res.json();
   return { props: { newest } };
}
