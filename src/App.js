import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (	
    <Router>
				<div className="pad-3 main-body">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/:id" component={HomePage} />
					</Switch>
				</div>
		</Router>
  );
}

export default App;
