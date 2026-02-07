const audio = new Audio("/music.mp3");
const [sessions, setSessions] = useState(0);

import { useEffect, useState } from "react";

export default function FocusTimer() {
    const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0); // 👈 ADD THIS LINE


  useEffect(() => {
  if (!running) return;

  const interval = setInterval(() => {
    setTime((t) => {
      if (t === 1) {
        setRunning(false);
        setSessions((s) => s + 1);
        return 25 * 60; // reset for next session
      }
      return t - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [running]);


  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Focus Timer</h2>
      <div className="text-4xl font-mono mb-4">
        {minutes}:{seconds}
      </div>
          <p className="mt-4 text-sm text-gray-300">
      Focus sessions completed: <span className="font-bold">{sessions}</span>
    </p>


      <div className="flex justify-center gap-3">
        <button
          onClick={() => setRunning(!running)}
          className="px-4 py-2 bg-green-500 rounded-lg"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
  onClick={() => audio.play()}
  className="px-4 py-2 bg-blue-500 rounded-lg"
>
  Play Music
</button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(25 * 60);
          }}
          className="px-4 py-2 bg-red-500 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
