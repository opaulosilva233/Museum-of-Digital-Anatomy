import React from 'react'
import { motion } from 'framer-motion'

const pedestals = [
  { year: '1973', desc: 'Protótipo DynaTAC de 1,1kg' },
  { year: '2007', desc: 'A rutura do iPhone' },
  { year: '2024', desc: 'Era do 5G e IA' },
]

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black relative overflow-hidden">

      {/* Header Académico (Glassmorphism) */}
      <header className="fixed w-full z-50 top-0 left-0">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between bg-slate-900/50 backdrop-blur-md border-b border-white/10">
          <div className="text-slate-300 text-sm">ISTEC | História da Ciência e das Técnicas</div>
          <div className="text-white font-bold tracking-widest text-lg">MUSEU DA ANATOMIA DIGITAL</div>
          <div className="text-slate-300 text-sm">Paulo Silva &amp; Francisco Rebelo</div>
        </div>
      </header>

      <main className="pt-24 px-6">
        {/* O Átrio - Linha do Tempo */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-slate-100">O Átrio</h2>

          <div className="flex gap-6 overflow-x-auto py-4 pb-8">
            {pedestals.map((p, i) => (
              <motion.div
                key={p.year}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500 min-w-[260px]"
              >
                <div className="text-cyan-400 font-bold text-2xl drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">{p.year}</div>
                <p className="mt-3 text-slate-200 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Espaço reservado para a Mesa de Autópsia */}
        {/* TODO: Mesa de Autópsia — inserir aqui o componente da mesa/interação */}

      </main>

      {/* Ambient glow / reflexos de luz para atmosfera 3D/Cyberpunk */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full filter blur-2xl" />
      </div>
    </div>
  )
}
