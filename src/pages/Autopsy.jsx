import { useState } from 'react'
import { DollarSign, Monitor, Cpu, Camera, WifiOff } from 'lucide-react'

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

export default function Autopsy() {
  const [activeNode, setActiveNode] = useState(null)

  return (
    <div className="pt-32">
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
              <p className="relative z-10 text-center text-xs uppercase tracking-[0.4em] text-gray-200">Mesa de Autópsia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
