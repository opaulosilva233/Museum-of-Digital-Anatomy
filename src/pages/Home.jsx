import { Link } from 'react-router-dom'
import { Atom } from 'lucide-react'

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-10 sm:py-16 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(217,70,239,0.14),_transparent_35%)]" />
        <div className="relative z-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-gray-300 backdrop-blur-md">
            <Atom className="h-4 w-4 text-cyan-400" />
            <span>Instituição Sombria | Anatomia Digital</span>
          </div>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl [text-shadow:0_0_18px_rgba(6,182,212,0.45),0_0_42px_rgba(217,70,239,0.28)]">
            Museu da Anatomia Digital
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Uma simulação imersiva onde o smartphone é exposto como artefacto, corpo e sistema de poder.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/museu"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_rgba(6,182,212,0.12)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition focus:outline-none"
            >
              Explorar Corredor (Fase 1)
            </Link>

            <Link
              to="/autopsia"
              className="inline-flex items-center gap-3 rounded-xl bg-black/30 border border-white/10 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(217,70,239,0.06)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition focus:outline-none"
            >
              Iniciar Autópsia (Fase 2)
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
