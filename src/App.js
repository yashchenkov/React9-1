import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <MyLink activeOnlyWhenExact={true} to="/" label="Главная">Главная</MyLink>
            </li>
            <li>
              <MyLink to="/drift-taxi" label="Дрифт-такси">Дрифт-такси</MyLink>
            </li>
            <li>
              <MyLink to="/time-attack" label="Time-attack">Time-attack</MyLink>
            </li>
            <li>
              <MyLink to="/forza-carting" label="Forza-Carting">Forza-Carting</MyLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/drift-taxi" element={<DriftTaxi />} />
          <Route path="/time-attack" element={<TimeAttack />} />
          <Route path="/" element={<Main />} />
          <Route path="/forza-carting" element={<ForzaCarting />} />
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  return <h2 >Главная</h2>;
}

function ForzaCarting() {
  return <h2 >Forza-Carting</h2>;
}

function DriftTaxi() {
  return <h2>Дрифт-такси</h2>;
}

function TimeAttack() {
  return <h2>Time-attack</h2>;
}

function MyLink({ label, to, activeOnlyWhenExact }) {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div >
      <Link to={to} className={match ? "clicked" : ""}>{label}</Link>
    </div>
  );
}