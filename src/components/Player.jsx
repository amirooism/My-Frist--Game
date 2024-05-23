import { useState } from "react";
export default function Player({ initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdititng, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    console.log(event);
    console.log("Amiroo")
    setPlayerName(event.target.value);
  }

  //   let btnCaption = "Edit"
  // new 
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEdititng) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdititng ? "Save" : "Edit"}</button>
    </li>
  );
}
