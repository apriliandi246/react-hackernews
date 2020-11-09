import Data from "../../components/Data";

export default function Show({ newest }) {
   return <Data data={newest} />;
}

export async function getServerSideProps() {
   const res = await fetch("https://node-hnapi.herokuapp.com/show");
   const newest = await res.json();
   return { props: { newest } };
}
