// import User from "./User";
import "./App.css";
// import Home from "./components/Home";
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <User data={{ name: "San", age: "26" }} /> */}
      {/* <Home/> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
