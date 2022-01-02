import logo from './logo.svg';
import './App.css';
import Employees from "./components/Employees/employees"
import OfficialVacations from "./components/OfficialVacations/OfficialVacations"
import Requests from "./components/Requests/Requests"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
  return (
    <div style={{padding:"5%"}}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Employees</Link>
                        </li>
                        <li>
                            <Link to="/OfficialVacations">Official Vacations</Link>
                        </li>
                        <li>
                            <Link to="/Requests">Requests</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/Requests">
                        <Requests />
                    </Route>
                    <Route path="/OfficialVacations">
                        <OfficialVacations />
                    </Route>
                    <Route path="/">
                        <Employees />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
