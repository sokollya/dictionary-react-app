import React from "react";
export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <ul>
        <strong className="header-synonyms">Synonyms: </strong> <br />
        {props.synonyms.map((synonym, index) => {
          return (
            <li className="synonyms" key={index}>
              {synonym}
            </li>
          );
        })}{" "}
      </ul>
    );
  } else {
    return null;
  }
}
