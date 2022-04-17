import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  return (
    <div className="login-container">
      <div className="img-container">
        <img src="/bignote.png"></img>
        <div className="note">
          <h1>
            {router?.query?.username}-ийн
            <br /> тэмдэглэл
          </h1>
          <div
            className="input-div"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                if (note) {
                  notes.push(note);
                  setNote("");
                }
              }
            }}>
            <input value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="Тэмдэглэл оруулах" />
            <h5
              onClick={() => {
                if (note) {
                  notes.push(note);
                  setNote("");
                }
              }}>
              +
            </h5>
          </div>
          <div className="notes">
            <ul>
              {notes.map((note, index) => (
                <li
                  key={index}
                  onClick={() => {
                    notes.splice(index, 1);
                    setNotes([...notes]);
                  }}>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
