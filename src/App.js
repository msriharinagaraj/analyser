import FocusTimer from "./FocusTimer";
function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        📊 Study Analyser Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="📈 Marks Analysis" desc="Track your test performance" />
        <DashboardCard title="🎯 Focus Area" desc="Subjects to improve" />
        <DashboardCard title="🧠 SWOT Analysis" desc="Strengths & Weaknesses" />
        <DashboardCard title="📅 Study Planner" desc="Calendar & To-Do" />
        <DashboardCard title="📚 Storage" desc="Notes & Books" />
        <DashboardCard title="🎵 Music Zone" desc="Focus music while studying" />
        <div className="mt-8 max-w-sm mx-auto">
  <FocusTimer />
</div>
      </div>
    </div>
  );
}

function DashboardCard({ title, desc, onClick }) {

  return (
    <div
  onClick={onClick}
  className="cursor-pointer bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition"
>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{desc}</p>
    </div>
    
  );
}

export default App;
