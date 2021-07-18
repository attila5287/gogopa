import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import InfoNote from './components/InfoNote';
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
		<Router>
			<div>
				<StoreProvider>
					<Nav />

					<InfoNote />

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/home' component={Home} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/favorites' component={FavoritesList} />
						<Route exact path='/posts/:id' component={Detail} />
						<Route component={NoMatch} />
					</Switch>
				</StoreProvider>
			</div>
		</Router>
	);
}

export default App;
