import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Layout from "./components/layout.component";
import Movie from "./components/movie.component";
import AddMovie from "./components/addMovie.component";
import Movies from "./components/movies.component";
import SingUp from "./components/singIn.compnent";
import Home from "./components/home.component";
import Footer from "./components/footer.component";

const App = () => {
  return (
    <>
        <Navbar />
        <Layout>
            <Switch>
                <Route path="/movies/:id" component={Movie} />
                <Route path="/addmovie" render={(props) => <AddMovie name="Add Movie" {...props} />} />
                <Route path="/movies" component={Movies} />
                <Route path="/singin" component={SingUp} />
                <Route path="/" component={Home} />
            </Switch>
        </Layout>
        <Footer />
    </>
  );
}
 
export default App;