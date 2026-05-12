export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] font-sans text-white overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0f1a]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.85)]" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">
              ISTEC | História da Ciência e das Técnicas
            </p>
          </div>

          <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400 text-right">
            Paulo Silva &amp; Francisco Rebelo | Abril 2026
          </p>
        </div>
      </header>

      <main className="relative pt-24 sm:pt-28">
        <section className="mx-auto mt-24 max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#111827] to-[#0f172a] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-gray-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-sky-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="2.2" />
                <ellipse cx="12" cy="12" rx="8.5" ry="3.5" />
                <ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(-60 12 12)" />
              </svg>
              <span>Museu da Anatomia Digital</span>
            </div>

            <div className="mt-8 max-w-4xl">
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Museu da Anatomia Digital
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
                Uma leitura crítica do smartphone como objeto histórico, interface cultural e artefacto sociotécnico. Aqui, o dispositivo não é neutro: ele acumula mercado, atenção, imagem e desigualdade.
              </p>
            </div>
          </div>
        </section>

        {/* Secção: O Átrio do Museu */}
        <section className="max-w-5xl mx-auto px-8 pb-24 mt-24">
          {/* Cabeçalho da Secção */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
            <h2 className="text-2xl font-bold text-white">O Átrio do Museu</h2>
            <span className="text-sm text-gray-500 ml-2">Linha do Tempo - Fase 1</span>
          </div>

          {/* Contentor da Linha do Tempo */}
          <div className="bg-[#0f1523] border border-white/5 rounded-[2rem] p-8 md:p-12 relative shadow-xl">
            {/* Linha vertical decorativa (escondida em mobile, visível em md) */}
            <div className="hidden md:block absolute left-[4.5rem] top-16 bottom-16 w-px bg-white/10"></div>

            <div className="space-y-12">
              {/* Item 1: 1973 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full border-2 border-cyan-500 bg-[#0f1523] relative z-10 hidden md:block"></div>
                    <span className="text-cyan-400 font-mono font-bold tracking-widest">1973</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">A Era dos Tijolos</h3>
                  <p className="text-gray-400 leading-relaxed">
                    O protótipo DynaTAC da Motorola inaugura a fantasia da mobilidade, mas pesa 1,1 kg e ainda pertence ao mundo industrial do objeto massivo.
                  </p>
                </div>
              </div>

              {/* Item 2: 2007 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full border-2 border-cyan-500 bg-[#0f1523] relative z-10 hidden md:block"></div>
                    <span className="text-cyan-400 font-mono font-bold tracking-widest">2007</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">A Rutura</h3>
                  <p className="text-gray-400 leading-relaxed">
                    O iPhone junta telefone, iPod e internet num só ecrã touch, reorganizando a experiência técnica, cultural e de mercado. O browsing torna-se a "killer app".
                  </p>
                </div>
              </div>

              {/* Item 3: 2024 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full border-2 border-cyan-500 bg-[#0f1523] relative z-10 hidden md:block"></div>
                    <span className="text-cyan-400 font-mono font-bold tracking-widest">2024</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">O Presente e a IA</h3>
                  <p className="text-gray-400 leading-relaxed">
                    O 5G consolida-se com 1,5 mil milhões de ligações e a Inteligência Artificial passa a correr localmente. O dispositivo afirma-se como infraestrutura essencial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
