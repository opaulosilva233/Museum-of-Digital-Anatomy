import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const navigate = useNavigate()
  const [hits, setHits] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [telemetry, setTelemetry] = useState('BYTES 0000 | COORD 00.0000N 00.0000E')

  useEffect(() => {
    if (hits >= 3) setIsUnlocked(true)
  }, [hits])

  useEffect(() => {
    if (!isUnlocked) return undefined

    const intervalId = window.setInterval(() => {
      const bytes = Math.floor(Math.random() * 9000 + 1000)
      const latitude = (Math.random() * 90).toFixed(4)
      const longitude = (Math.random() * 180).toFixed(4)
      const latHemisphere = Math.random() > 0.5 ? 'N' : 'S'
      const lonHemisphere = Math.random() > 0.5 ? 'E' : 'W'

      setTelemetry(`BYTES ${bytes} | COORD ${latitude}${latHemisphere} ${longitude}${lonHemisphere}`)
    }, 220)

    return () => window.clearInterval(intervalId)
  }, [isUnlocked])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [isUnlocked])

  const narrativeByHits = {
    0: 'O ARTEFACTO E UMA CAIXA NEGRA. CLICA PARA DISSECAR.',
    1: 'AVISO: MERCADO E ATENCAO OCULTOS. CONTINUAR?',
    2: 'A QUEBRAR A ILUSAO DE NEUTRALIDADE...',
  }

  const narrative = narrativeByHits[hits] ?? 'PROTOCOLO ABERTO.'

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <AnimatePresence mode="wait">
              {hits < 3 && (
                <motion.button
                  key="black-box"
                  type="button"
                  onClick={() => setHits((currentHits) => Math.min(currentHits + 1, 3))}
                  className={`relative h-[550px] w-[280px] cursor-crosshair overflow-hidden border bg-[#0a0a0a] ${
                    hits === 1 ? 'border-red-600' : 'border-[#1a1a1a]'
                  }`}
                  initial={{ opacity: 0.95, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: hits > 0 ? [-10, 10, -5, 5, 0] : 0,
                    filter: hits > 0 ? ['invert(1)', 'invert(0)'] : 'invert(0)',
                    boxShadow:
                      hits >= 2
                        ? [
                            '0 0 0 1px rgba(255,255,255,0.04)',
                            '12px 0 0 rgba(0,255,255,0.45), -12px 0 0 rgba(255,0,255,0.45)',
                            '0 0 0 1px rgba(255,255,255,0.04)',
                          ]
                        : '0 0 0 1px rgba(255,255,255,0.04)',
                  }}
                  exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  aria-label="Dissecar caixa negra"
                >
                  <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/10" />
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff06_0_2px,#00000000_2px_6px)]" />
                  <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-white/10" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-white/10" />
                </motion.button>
              )}
            </AnimatePresence>

            <p className="mt-12 px-6 text-center font-mono text-xs uppercase tracking-widest text-white/50">{narrative}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isUnlocked && (
        <motion.div
          key="dossier-unlocked"
          className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 1.1, times: [0, 0.35, 0.65, 1] }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 -z-10 bg-[#050505] bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />

          {/* Scan line */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-cyan-300/10"
            animate={{ y: ['0%', '100%', '0%'] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Header fixed */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6 font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 sm:px-8 sm:pt-8">
            <span>ROUTING TERMINAL // ONLINE</span>
            <span>{telemetry}</span>
          </div>

          {/* Left portal - absolute so it doesn't affect centering */}
          <div className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 z-10 w-80 h-96 flex items-center justify-center border-2 border-dashed border-cyan-300/40 bg-white/[0.02] p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_40%),repeating-linear-gradient(to_bottom,rgba(6,182,212,0.05)_0_1px,transparent_1px_11px)]" />
            <div className="relative flex h-full w-full flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.5em] text-cyan-300/70">
                <span>PORTO // MUSEU</span>
                <span className="text-cyan-400">●</span>
              </div>

              <div className="flex flex-1 items-center justify-center py-4">
                <div className="text-center">
                  <p className="text-[clamp(1.8rem,3vw,3.5rem)] font-black uppercase leading-[0.88] tracking-[0.12em] text-cyan-100">FASE 1</p>
                  <p className="mt-2 text-[10px] font-mono text-cyan-300/60">CORREDOR</p>
                </div>
              </div>

              <div className="flex items-end justify-between gap-2 text-[9px] font-mono uppercase tracking-[0.35em] text-cyan-300/50">
                <span>socket ativo</span>
                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>◄</motion.span>
              </div>
            </div>
          </div>

          {/* Right portal - absolute */}
          <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 z-10 w-80 h-96 flex items-center justify-center border-2 border-dashed border-cyan-300/40 bg-white/[0.02] p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_40%),repeating-linear-gradient(to_bottom,rgba(6,182,212,0.05)_0_1px,transparent_1px_11px)]" />
            <div className="relative flex h-full w-full flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.5em] text-cyan-300/70">
                <span className="text-cyan-400">●</span>
                <span>PORTO // AUTÓPSIA</span>
              </div>

              <div className="flex flex-1 items-center justify-center py-4">
                <div className="text-center">
                  <p className="text-[clamp(1.8rem,3vw,3.5rem)] font-black uppercase leading-[0.88] tracking-[0.12em] text-cyan-100">FASE 2</p>
                  <p className="mt-2 text-[10px] font-mono text-cyan-300/60">DISSECAÇÃO</p>
                </div>
              </div>

              <div className="flex items-end justify-between gap-2 text-[9px] font-mono uppercase tracking-[0.35em] text-cyan-300/50">
                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>►</motion.span>
                <span>socket industrial</span>
              </div>
            </div>
          </div>

          {/* Central area: parent is flex-centered so the core can be relative and centered */}
          <div className="relative inset-0 z-20 flex items-center justify-center pointer-events-none">
            {/* Grid guides */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[34vw] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/15" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34vw] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/15" />

            {/* Draggable core: no absolute positioning or translate transforms here */}
            <motion.div
              className="pointer-events-auto relative z-50 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center cursor-grab active:cursor-grabbing select-none border-2 border-cyan-500/50 bg-[#0a0a0a] text-center shadow-[0_0_0_2px_rgba(255,255,255,0.04),0_0_40px_rgba(6,182,212,0.12)]"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -150) navigate('/museu')
                else if (info.offset.x > 150) navigate('/autopsia')
              }}
              initial={{ scale: 1 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              aria-label="Arrastar para conectar"
            >
              <div className="pointer-events-none absolute inset-3 border-2 border-dashed border-cyan-300/30 rounded-sm" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_50%)]" />

              <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-cyan-200/60" />
              <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-cyan-200/60" />
              <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-cyan-200/60" />
              <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-cyan-200/60" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 bg-black/20 shadow-[inset_0_0_32px_rgba(6,182,212,0.1)]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-200/70 bg-cyan-300/5 shadow-[0_0_16px_rgba(6,182,212,0.4)]" />

              <motion.div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2" animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }} transition={{ duration: 2, repeat: Infinity }}>
                <svg className="h-full w-full text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v6m0 8v6M6.22 6.22l4.24 4.24m5.08 5.08l4.24 4.24M2 12h6m8 0h6M6.22 17.78l4.24-4.24m5.08-5.08l4.24-4.24" />
                </svg>
              </motion.div>

              <span className="relative z-10 px-4 text-[11px] font-mono uppercase tracking-[0.6em] text-cyan-100/90">Arrastar</span>
              <span className="relative z-10 mt-2 max-w-[10ch] text-[clamp(1.1rem,2.2vw,1.4rem)] font-black uppercase leading-tight tracking-[0.15em] text-white">Para Conectar</span>
            </motion.div>

            {/* Animated arrows left */}
            <motion.div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" animate={{ x: [-40, -60, -40], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="flex items-center gap-3 -ml-20">
                <motion.div animate={{ x: [0, -8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <svg className="h-6 w-6 text-cyan-300/60" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" /></svg>
                </motion.div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300/50 whitespace-nowrap">Museu</span>
              </div>
            </motion.div>

            {/* Animated arrows right */}
            <motion.div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" animate={{ x: [40, 60, 40], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="flex items-center gap-3 ml-20">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300/50 whitespace-nowrap">Autópsia</span>
                <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <svg className="h-6 w-6 text-cyan-300/60" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" /></svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}
