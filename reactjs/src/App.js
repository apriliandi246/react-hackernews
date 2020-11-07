import News from "./components/Home";
import Newest from "./components/Newest";
import Show from "./components/Show";
import Jobs from "./components/Jobs";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import "./css/style.css";

function App() {
   return (
      <>
         <Nav />

         <div className="container">
            <div className="data-container">
               <Switch>
                  <Route path="/" exact component={News} />
                  <Route path="/newest" component={Newest} />
                  <Route path="/show" component={Show} />
                  <Route path="/jobs" component={Jobs} />
               </Switch>
            </div>
         </div>
      </>
   );
}

export default App;
