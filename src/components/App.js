import "../styles/App.scss";

//components
import HamburguerMenu from "./HamburgerMenu";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <header>
        <HamburguerMenu />
      </header>
      <main>
        <Hello />
      </main>
    </div>
  );
}

export default App;
