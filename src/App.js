import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #ddd",
        paddingBottom: 10
      }}>
        <h2>📊 Analyser</h2>

        {user ? (
          <div>
            👋 {user.displayName}
            <button onClick={logout} style={{ marginLeft: 10 }}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>Login with Google</button>
        )}
      </div>

      {/* DASHBOARD */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
        marginTop: 30
      }}>
        <Card title="📈 Marks Analyser" />
        <Card title="✅ To-Do List" />
        <Card title="🎯 Focus Area" />
        <Card title="📅 Calendar" />
        <Card title="🎵 Study Music" />
        <Card title="👥 Friends Connect" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: 10,
      padding: 20,
      background: "#fafafa"
    }}>
      <h3>{title}</h3>
      <p>Coming soon…</p>
    </div>
  );
}

export default App;
