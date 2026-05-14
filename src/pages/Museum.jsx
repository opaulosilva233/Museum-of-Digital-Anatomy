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

export default function Museum() {
  return (
    <div className="pt-32">
      <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.85)]" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Corredor do Museu</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {timelineNodes.map((node) => (
            <article
              key={node.year}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
            >
              <p className="text-4xl font-semibold tracking-[0.2em] text-cyan-300 [text-shadow:0_0_18px_rgba(6,182,212,0.7)]">{node.year}</p>
              <h3 className="mt-5 text-xl font-medium text-white">{node.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">{node.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
