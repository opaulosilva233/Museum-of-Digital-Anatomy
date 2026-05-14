import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [hits, setHits] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    if (hits >= 3) {
      setIsUnlocked(true)
    }
  }, [hits])

  useEffect(() => {
    document.body.style.overflow = isUnlocked ? 'auto' : 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
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
                  exit={{
                    scale: 1.5,
                    opacity: 0,
                    filter: 'blur(20px)',
                  }}
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

            <p className="mt-12 px-6 text-center font-mono text-xs uppercase tracking-widest text-white/50">
              {narrative}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: 'grayscale(100%)' }}
        animate={{
          opacity: isUnlocked ? 1 : 0,
          filter: isUnlocked ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
        transition={{ duration: 1 }}
      >
        <section className="mx-auto min-h-[80vh] max-w-6xl px-6 py-20 sm:px-10">
          <div className="border border-white/20 bg-black px-8 py-16 sm:px-12">
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-white/45">
                MUSEU-ARQUIVO / SISTEMA ABERTO
              </p>

              <h1 className="mt-8 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
                Museu da Anatomia Digital
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                Uma simulacao imersiva onde o smartphone e exposto como artefacto, corpo e sistema de poder.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/museu"
                  className="inline-flex items-center border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explorar Corredor
                </Link>

                <Link
                  to="/autopsia"
                  className="inline-flex items-center border border-white/50 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Iniciar Autopsia
                </Link>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
