import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Museum from './pages/Museum'
import Autopsy from './pages/Autopsy'

function Shell() {
  const location = useLocation()
  const hideHeader = location.pathname === '/'
  const shellPadding = hideHeader ? 'pb-0' : 'pb-20'

  return (
    <div className={`min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-x-hidden ${shellPadding}`}>
      {!hideHeader && (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.95)]" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-300">Museu da Anatomia Digital</p>
            </div>

            <nav className="flex items-center gap-6">
              <Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
              <Link to="/museu" className="text-sm text-gray-300 hover:text-white">Museu</Link>
              <Link to="/autopsia" className="text-sm text-gray-300 hover:text-white">Autópsia</Link>
            </nav>
          </div>
        </header>
      )}

      <main className={hideHeader ? 'relative' : 'relative pt-28 sm:pt-32'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museu" element={<Museum />} />
          <Route path="/autopsia" element={<Autopsy />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  )
}
