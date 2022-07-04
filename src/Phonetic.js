import React from "react";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>{" "}
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="listen"
      >
        Listen
      </a>
    </div>
  );
}
