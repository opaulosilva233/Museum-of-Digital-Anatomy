import { useState } from 'react'
import { Atom, DollarSign, Monitor, Cpu, Camera, WifiOff } from 'lucide-react'

const timelineNodes = [
  {
    year: '1973',
    title: 'O protótipo deixa o laboratório',
    text: 'Primeira promessa de mobilidade: pesado, industrial e ainda sem aura de consumo.',
  },
  {
    year: '2007',
    title: 'O gesto táctil reorganiza a vida',
    text: 'Telefone, media e internet fundem-se num ecrã que reconfigura hábitos e mercado.',
  },
  {
    year: '2024',
    title: 'A infraestrutura íntima',
    text: 'O smartphone já não é só objecto: é interface, memória, vigilância e dependência.',
  },
]

const nodeContent = {
  DollarSign:
    'MERCADO: Abaixo de 100 USD não é filantropia, é captura de consumidores (GSMA, 2023).',
  Monitor: 'ECRÃ: Convergência de media e filter bubbles algorítmicas sem escrutínio.',
  Cpu: 'PROCESSADOR: Economia da atenção. O design viciante gera FOMO e Phubbing.',
  Camera: 'CÂMARA: Selfie culture. 93 mil milhões de fotos/dia e a performance da identidade.',
  WifiOff: 'ANTENA: A falsa narrativa do acesso global. 1,3 mil milhões continuam excluídos.',
}

const autopsyNodes = [
  {
    key: 'DollarSign',
    icon: DollarSign,
    label: 'Mercado',
    position: 'left-1/2 top-2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    key: 'Monitor',
    icon: Monitor,
    label: 'Ecrã',
    position: 'right-10 top-1/2 -translate-y-1/2',
  },
  {
    key: 'Cpu',
    icon: Cpu,
    label: 'Processador',
    position: 'left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2',
  },
  {
    key: 'Camera',
    icon: Camera,
    label: 'Câmara',
    position: 'left-10 top-1/2 -translate-y-1/2',
  },
  {
    key: 'WifiOff',
    icon: WifiOff,
    label: 'Rede',
    position: 'right-1/4 bottom-14 translate-x-1/2 translate-y-1/2',
  },
]

export default function App() {
  const [activeNode, setActiveNode] = useState(null)

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-x-hidden pb-20">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.95)]" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-300">
              Museu da Anatomia Digital
            </p>
          </div>

          <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400 text-right">
            Corredor expositivo | Mesa de autópsia
          </p>
        </div>
      </header>

      <main className="relative pt-28 sm:pt-32">
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
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.85)]" />
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Corredor do Museu
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {timelineNodes.map((node) => (
              <article
                key={node.year}
                className="bg-white/5 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
              >
                <p className="text-4xl font-semibold tracking-[0.2em] text-cyan-300 [text-shadow:0_0_18px_rgba(6,182,212,0.7)]">
                  {node.year}
                </p>
                <h3 className="mt-5 text-xl font-medium text-white">{node.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{node.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="relative mx-auto mt-24 flex w-full max-w-3xl items-center justify-center aspect-[2/1] rounded-[100%] border-2 border-purple-500/40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent shadow-[0_20px_80px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-0 rounded-[100%] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.12),_transparent_35%),radial-gradient(circle_at_center,_rgba(217,70,239,0.12),_transparent_55%)] blur-xl" />
            <div className="absolute inset-6 rounded-[100%] border border-white/5 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]" />

            {activeNode ? (
              <div className="absolute -top-32 z-10 w-80 rounded-xl border border-cyan-400/60 bg-cyan-950/80 p-6 text-center text-sm leading-7 text-cyan-100 shadow-[0_0_40px_rgba(6,182,212,0.4)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-300">Holograma Ativo</p>
                <p className="mt-3 text-base font-medium">{nodeContent[activeNode]}</p>
              </div>
            ) : (
              <div className="absolute -top-28 z-10 rounded-xl border border-white/10 bg-black/35 px-5 py-4 text-center text-sm text-gray-300 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                Seleciona um nó para abrir a dissecação holográfica.
              </div>
            )}

            <div className="relative z-0 flex h-full w-full items-center justify-center">
              <div className="absolute h-40 w-40 rounded-full border border-cyan-400/20 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.24),_rgba(6,182,212,0.03)_55%,_transparent_75%)] blur-[2px]" />

              {autopsyNodes.map((node) => {
                const Icon = node.icon
                const isActive = activeNode === node.key

                return (
                  <button
                    key={node.key}
                    type="button"
                    onClick={() => setActiveNode((current) => (current === node.key ? null : node.key))}
                    className={`absolute ${node.position} group flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/20 bg-black/25 text-gray-500 backdrop-blur-xl transition-all duration-300 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] ${
                      isActive ? 'text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.45)] border-cyan-300/50' : ''
                    }`}
                    aria-pressed={isActive}
                    aria-label={node.label}
                  >
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.12),_transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Icon className="relative z-10 h-8 w-8" strokeWidth={1.6} />
                  </button>
                )
              })}

              <div className="relative flex h-36 w-72 items-center justify-center rounded-[999px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.14),_rgba(255,255,255,0.03)_45%,_rgba(255,255,255,0.02)_70%,_transparent_100%)] shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-md">
                <div className="absolute inset-2 rounded-[999px] border border-purple-400/20 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.18),_transparent_55%)]" />
                <div className="absolute inset-x-10 top-5 h-px bg-cyan-300/35 shadow-[0_0_16px_rgba(6,182,212,0.9)]" />
                <div className="absolute inset-x-8 bottom-5 h-px bg-fuchsia-400/30 shadow-[0_0_16px_rgba(217,70,239,0.8)]" />
                <p className="relative z-10 text-center text-xs uppercase tracking-[0.4em] text-gray-200">
                  Mesa de Autópsia
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
