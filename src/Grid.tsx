import { useState } from "react";
import { words } from "./API/words";

export default function Grid() {
  // each attempt generates a new row
  //if they got the letter right in the position, the letter will be highlighted green
  //and if position is wrong make it yellow
  // else keep it grey
  const word = words[Math.floor(Math.random() * words.length)];
  const [text, setText] = useState("");

  const [res, setRes] = useState("");

  function checkWord() {
    if (word?.toLowerCase() === text.toLowerCase()) {
      setRes(word);
    } else {
      setRes("");
    }
    console.log(word);
  }

  return (
    <div>
      <ul>
        {res ? (
          <>
            <li>{res}</li>
          </>
        ) : (
          ""
        )}
      </ul>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={checkWord}>Check</button>
      {res ? (
        <>
          <h1> Answer is correct</h1>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
