import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="leftbar">
        <h1>Projects</h1>
        <ul className="noBullet">
          <li>project-1</li>
          <li>project-1</li>
          <li>project-1</li>
        </ul>
      </div>
      <div className="rightbar">
        project-1
        <div className="header">
          <h3 className="headerItem">models</h3>
          <h3 className="headerItem">real-datasets</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
