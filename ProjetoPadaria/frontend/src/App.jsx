import { Routes, Route, Link, useLocation } from "react-router-dom";
import Estoque from "./pages/Estoque";
import Fornada from "./pages/Fornada";

export default function App() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Estoque" },
    { path: "/fornadas", label: "Fornadas" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">

      <header className="bg-stone-900 border-b border-stone-800 sticky top-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6">
          <h1 className="text-2xl font-bold text-orange-400">Padaria</h1>
          <nav className="flex gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition cursor-pointer
                  ${location.pathname === link.path
                    ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-transparent"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Estoque />} />
          <Route path="/fornadas" element={<Fornada />} />
        </Routes>
      </main>

    </div>
  );
}