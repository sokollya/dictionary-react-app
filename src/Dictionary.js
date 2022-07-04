import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("time");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={keyword}
            />
          </form>
          <div className="hint">
            {" "}
            <small>i.e. paris, wine, yoga, coding</small>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
