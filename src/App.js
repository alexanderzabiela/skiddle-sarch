import Home from "./pages/home/Home";
import EventDetails from "./pages/eventDetails/EventDetails";
import ArtistDetails from "./pages/artistDetails/ArtistDetails";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/event/:id">
              <EventDetails />
            </Route>
            <Route path="/artist/:id">
              <ArtistDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
