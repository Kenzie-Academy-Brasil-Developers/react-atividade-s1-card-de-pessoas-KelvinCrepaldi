import logo from "./logo.svg";
import "./App.css";

import Developer from "./components/Developer";

function App() {
  const person = {
    gabriel: {
      name: "Gabriel",
      age: 19,
      country: "Brasil",
    },
    filipe: {
      name: "Filipe",
      age: 28,
      country: "Brasil",
    },
    mariana: {
      name: "Mariana",
      age: 24,
      country: "Itália",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <Developer
          name={person.gabriel.name}
          age={person.gabriel.age}
          country={person.gabriel.country}
        />
        <Developer
          name={person.filipe.name}
          age={person.filipe.age}
          country={person.filipe.country}
        />
        <Developer
          name={person.mariana.name}
          age={person.mariana.age}
          country={person.mariana.country}
        />
      </header>
    </div>
  );
}

export default App;
