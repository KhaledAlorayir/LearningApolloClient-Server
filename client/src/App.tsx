import Home from "./pages/Home";
import Image from "./pages/Image";
import { Route, Switch, Link } from "wouter";

function App() {
  return (
    <main>
      <h1>
        <Link href="/">Apollo 🚀</Link>
      </h1>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/image/:id">{(params) => <Image params={params} />}</Route>
        <Route>
          <h1>not found 404</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
