import Dictionary from "./Dictionary";
import dictionary from "./dictionary.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={dictionary} className="img-fluid" alt="dictionary" />
      <Dictionary />
      <footer className="text-center">
        <small>
          This project was coded by Yana Sokol and is{" "}
          <a
            href="https://github.com/sokollya/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Git Hub
          </a>{" "}
          and{" "}
          <a
            href="https://neon-crumble-f62cbb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </small>
      </footer>
    </div>
  );
}

export default App;
