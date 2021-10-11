import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-row items-start">
      <div className="w-1/5 h-screen blue p-16">
        <h1 className="text-2xl font-bold">Projects</h1>
        <ul className="list-none p-4">
          <li>project-1</li>
          <li>project-1</li>
          <li>project-1</li>
        </ul>
      </div>
      <div className="flex-grow p-16">
        project-1
        <div className="flex flex-row ml-16 pl-8 mt-8 border-green-500 border-solid border-2 align-center">
          <h3 className="font-semibold">models</h3>
          <h3 className="pl-8 font-semibold">real-datasets</h3>
        </div>
        <div className="flex flex-row mt-8 justify-between">
          <h1 className="text-3xl font-bold">models</h1>
          <button className="blue text-white p-6 pt-2 pb-2">
            Create New Model
          </button>
        </div>
        <div>
          <ul>
            <li>
              <div className="flex flex-row">
                <span>model-1</span>
                <button className="blue text-white p-6 pt-2 pb-2">
                  Delete Model
                </button>
                <button className="blue text-white p-6 pt-2 pb-2">
                  Update name
                </button>
              </div>
              <div className="flex flex-row">
                <span>model-1</span>
                <button className="blue text-white p-6 pt-2 pb-2">
                  Delete Model
                </button>
                <button className="blue text-white p-6 pt-2 pb-2">
                  Update name
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
