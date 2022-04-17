import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login-container">
      <div className="form">
        <h1>Нэвтрэх</h1>
        <h2>Хэрэглэгчийн нэр</h2>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="" />
        <h2>Нууц үг</h2>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          onClick={() => {
            router.push({ pathname: "/todo", query: { username, password } });
          }}>
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
