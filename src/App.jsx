import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Cpu,
  DollarSign,
  BookOpen,
  Monitor,
  ShieldAlert,
  Sparkles,
  WifiOff,
} from 'lucide-react'

const timelineEvents = [
  {
    year: '1973',
    title: 'A Era dos Tijolos',
    description:
      'O protótipo DynaTAC da Motorola inaugura a fantasia da mobilidade, mas pesa 1,1 kg e ainda pertence ao mundo industrial do objeto massivo.',
    tag: 'Primeiro gesto portátil',
  },
  {
    year: '2007',
    title: 'A Rutura',
    description:
      'O iPhone junta telefone, iPod e internet num só ecrã touch, reorganizando a experiência técnica, cultural e económica do bolso.',
    tag: 'Convergência total',
  },
  {
    year: '2024',
    title: 'O Presente',
    description:
      'Vivemos a era do 5G, com 1,5 mil milhões de ligações ativas e IA a correr localmente no dispositivo, como infraestrutura e companhia.',
    tag: 'Computação ubíqua',
  },
]

const anatomyParts = [
  {
    id: 'mercado',
    label: 'Mercado',
    icon: DollarSign,
    stat: 'Sub-100 USD',
    title: 'Isto não é filantropia',
    summary:
      'Um smartphone abaixo de 100 USD não é um ato altruísta; é uma estratégia para capturar novos consumidores e expandir dependências de plataforma.',
    details:
      'O preço de entrada reduz a fricção inicial, mas reposiciona o utilizador como ativo futuro: dados, subscrições, anúncios e retenção de ecossistema tornam-se a margem real.',
  },
  {
    id: 'ecrã',
    label: 'Ecrã',
    icon: Monitor,
    stat: 'TikTok + Spotify',
    title: 'Convergência dos media e opacidade algorítmica',
    summary:
      'O ecrã condensa cinema, música, chat e jogo, mas também esconde sistemas opacos que criam filter bubbles sem escrutínio público.',
    details:
      'A superfície é lisa, mas a seleção é política: feeds, recomendações e ranking otimizam atenção, não necessariamente pluralidade ou autonomia crítica.',
  },
  {
    id: 'processador',
    label: 'Processador',
    icon: Cpu,
    stat: '3h 46m/dia',
    title: 'Design viciante, saúde mental em risco',
    summary:
      'O processamento invisível organiza loops de recompensa que alimentam uso compulsivo, FOMO e a patologização do estar sempre disponível.',
    details:
      'O tempo médio de ecrã de 3h 46min ajuda a normalizar estados de alerta contínuo, com sintomas sociais como phubbing e ansiedade de desconexão.',
  },
  {
    id: 'camera',
    label: 'Câmara',
    icon: Camera,
    stat: '93 mil milhões/dia',
    title: 'Selfie culture e curadoria permanente',
    summary:
      'A câmara transforma o smartphone em palco: fotografar deixa de ser só registo e passa a ser produção contínua da identidade.',
    details:
      'Com 93 mil milhões de fotos por dia, a imagem pessoal deixa de ser evento ocasional e torna-se manutenção contínua de presença, estilo e pertença.',
  },
  {
    id: 'antena',
    label: 'Antena',
    icon: WifiOff,
    stat: 'Brecha digital',
    title: 'Contra a narrativa do acesso global',
    summary:
      'A conectividade não é universal: 1,3 mil milhões continuam sem cobertura, 40% não têm literacia básica e as mulheres têm menos 20% de probabilidade de usar internet móvel.',
    details:
      'A antena expõe a desigualdade estrutural: infraestrutura, educação e género ainda definem quem entra no mundo conectado e em que condições.',
  },
]

const page = {
  minHeight: '100vh',
  color: '#e2e8f0',
  background:
    'radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 30%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.14), transparent 25%), linear-gradient(180deg, #020617 0%, #0f172a 55%, #020617 100%)',
}

const shell = {
  width: 'min(1180px, calc(100% - 32px))',
  margin: '0 auto',
  padding: '32px 0 56px',
  textAlign: 'left',
}

const cardBase = {
  border: '1px solid rgba(148, 163, 184, 0.18)',
  background: 'rgba(15, 23, 42, 0.72)',
  backdropFilter: 'blur(18px)',
  boxShadow: '0 30px 80px rgba(2, 6, 23, 0.45)',
}

const footerReferences = [
  'Bijker, W. E., & Pinch, T. J. (1987). The social construction of technological systems.',
  'Jenkins, H. (2006). Convergence culture.',
  'Pariser, E. (2011). The filter bubble.',
  'Turkle, S. (2011). Alone together.',
  'van Dijck, J. (2013). The culture of connectivity.',
]

function App() {
  const [activePart, setActivePart] = useState(anatomyParts[0].id)
  const [showRefs, setShowRefs] = useState(false)
  const selectedPart = anatomyParts.find((part) => part.id === activePart) ?? anatomyParts[0]

  return (
    <div style={page}>
      <header
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 20,
          borderBottom: '1px solid rgba(148, 163, 184, 0.16)',
          background: 'rgba(2, 6, 23, 0.68)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <div
          style={{
            width: 'min(1180px, calc(100% - 32px))',
            margin: '0 auto',
            minHeight: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            color: '#e2e8f0',
            fontSize: 13,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#38bdf8',
                boxShadow: '0 0 18px rgba(56, 189, 248, 0.6)',
                flexShrink: 0,
              }}
            />
            <span style={{ color: '#f8fafc', whiteSpace: 'nowrap' }}>
              ISTEC | História da Ciência e das Técnicas
            </span>
          </div>
          <div style={{ color: '#cbd5e1', whiteSpace: 'nowrap', textAlign: 'right' }}>
            Paulo Silva &amp; Francisco Rebelo | Abril 2026
          </div>
        </div>
      </header>

      <main style={{ ...shell, paddingTop: 104, paddingBottom: 72 }}>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            ...cardBase,
            borderRadius: '28px',
            padding: '28px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(14, 165, 233, 0.10), transparent 30%, rgba(168, 85, 247, 0.08))',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', display: 'grid', gap: 18 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                width: 'fit-content',
                borderRadius: 999,
                border: '1px solid rgba(148, 163, 184, 0.18)',
                background: 'rgba(15, 23, 42, 0.62)',
                padding: '10px 14px',
                color: '#94a3b8',
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={16} /> Museu da Anatomia Digital
            </div>

            <div style={{ display: 'grid', gap: 14, maxWidth: 860 }}>
              <h1
                style={{
                  margin: 0,
                  color: '#f8fafc',
                  fontSize: 'clamp(2.3rem, 5vw, 4.8rem)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.06em',
                  fontWeight: 700,
                }}
              >
                Museu da Anatomia Digital
              </h1>
              <p
                style={{
                  margin: 0,
                  maxWidth: 760,
                  color: '#cbd5e1',
                  fontSize: '1.04rem',
                  lineHeight: 1.7,
                }}
              >
                Uma leitura crítica do smartphone como objeto histórico, interface cultural e
                artefacto sociotécnico. Aqui, o dispositivo não é neutro: ele acumula mercado,
                atenção, imagem e desigualdade.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginTop: 28 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#38bdf8',
                boxShadow: '0 0 24px rgba(56, 189, 248, 0.7)',
              }}
            />
            <h2
              style={{
                margin: 0,
                color: '#f8fafc',
                fontSize: '1.65rem',
                letterSpacing: '-0.04em',
              }}
            >
              O Átrio do Museu
            </h2>
            <span style={{ color: '#94a3b8', fontSize: 14 }}>Linha do Tempo - Fase 1</span>
          </div>

          <div
            style={{
              ...cardBase,
              borderRadius: 28,
              padding: '28px 22px',
            }}
          >
            <div style={{ position: 'relative', paddingLeft: 22, display: 'grid', gap: 22 }}>
              <div
                style={{
                  position: 'absolute',
                  left: 10,
                  top: 8,
                  bottom: 8,
                  width: 1,
                  background:
                    'linear-gradient(180deg, rgba(56, 189, 248, 0.7), rgba(248, 250, 252, 0.14))',
                }}
              />

              {timelineEvents.map((event, index) => (
                <motion.article
                  key={event.year}
                  initial={{ opacity: 0, x: -26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  style={{
                    position: 'relative',
                    padding: '18px 18px 18px 22px',
                    borderRadius: 22,
                    background:
                      'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.65))',
                    border: '1px solid rgba(148, 163, 184, 0.14)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: -4,
                      top: 26,
                      width: 18,
                      height: 18,
                      borderRadius: 999,
                      background: '#0f172a',
                      border: '1px solid rgba(56, 189, 248, 0.7)',
                      boxShadow: '0 0 0 6px rgba(56, 189, 248, 0.08)',
                    }}
                  />

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '110px 1fr',
                      gap: 18,
                      alignItems: 'start',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: '#38bdf8',
                          fontSize: 13,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {event.year}
                      </div>
                      <div style={{ color: '#f8fafc', fontSize: '1.2rem', fontWeight: 600, marginTop: 8 }}>
                        {event.title}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gap: 10 }}>
                      <div style={{ color: '#cbd5e1', lineHeight: 1.75 }}>{event.description}</div>
                      <div
                        style={{
                          width: 'fit-content',
                          borderRadius: 999,
                          border: '1px solid rgba(148, 163, 184, 0.16)',
                          background: 'rgba(2, 6, 23, 0.5)',
                          color: '#e2e8f0',
                          padding: '7px 12px',
                          fontSize: 13,
                        }}
                      >
                        {event.tag}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          style={{ marginTop: 28 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#a855f7',
                boxShadow: '0 0 24px rgba(168, 85, 247, 0.6)',
              }}
            />
            <h2
              style={{
                margin: 0,
                color: '#f8fafc',
                fontSize: '1.65rem',
                letterSpacing: '-0.04em',
              }}
            >
              A Mesa de Autópsia
            </h2>
            <span style={{ color: '#94a3b8', fontSize: 14 }}>Fase 2 e Ética</span>
          </div>

          <div
            style={{
              ...cardBase,
              borderRadius: 28,
              padding: 20,
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: 18,
            }}
          >
            <div style={{ display: 'grid', gap: 14 }}>
              <div style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                A dissecação do smartphone recusa o determinismo tecnológico. Cada parte do objeto
                mostra que o dispositivo é uma síntese de mercado, mediação, disciplina, imagem e
                desigualdade. Clica numa peça para revelar o impacto sociotécnico.
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                  gap: 12,
                }}
              >
                {anatomyParts.map((part) => {
                  const Icon = part.icon
                  const isActive = selectedPart.id === part.id

                  return (
                    <motion.button
                      key={part.id}
                      type="button"
                      onClick={() => setActivePart(part.id)}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      layout
                      style={{
                        textAlign: 'left',
                        padding: 16,
                        borderRadius: 22,
                        cursor: 'pointer',
                        color: '#e2e8f0',
                        border: isActive
                          ? '1px solid rgba(148, 163, 184, 0.45)'
                          : '1px solid rgba(148, 163, 184, 0.14)',
                        background: isActive
                          ? 'linear-gradient(180deg, rgba(15, 23, 42, 1), rgba(2, 6, 23, 0.92))'
                          : 'rgba(15, 23, 42, 0.6)',
                        boxShadow: isActive
                          ? '0 18px 40px rgba(2, 6, 23, 0.42)'
                          : '0 10px 24px rgba(2, 6, 23, 0.22)',
                        outline: 'none',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: 14,
                            display: 'grid',
                            placeItems: 'center',
                            background: 'rgba(148, 163, 184, 0.12)',
                            border: '1px solid rgba(148, 163, 184, 0.14)',
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <ChevronDown
                          size={18}
                          style={{
                            color: '#94a3b8',
                            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 220ms ease',
                          }}
                        />
                      </div>
                      <div
                        style={{
                          marginTop: 14,
                          color: '#94a3b8',
                          fontSize: 13,
                          textTransform: 'uppercase',
                          letterSpacing: '0.18em',
                        }}
                      >
                        {part.label}
                      </div>
                      <div
                        style={{
                          marginTop: 8,
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#f8fafc',
                          lineHeight: 1.25,
                        }}
                      >
                        {part.title}
                      </div>
                      <div style={{ marginTop: 8, color: '#cbd5e1', lineHeight: 1.65 }}>
                        {part.summary}
                      </div>
                      <div
                        style={{
                          marginTop: 14,
                          width: 'fit-content',
                          padding: '7px 10px',
                          borderRadius: 999,
                          background: 'rgba(2, 6, 23, 0.56)',
                          color: '#e2e8f0',
                          border: `1px solid ${
                            isActive ? 'rgba(56, 189, 248, 0.32)' : 'rgba(148, 163, 184, 0.16)'
                          }`,
                          fontSize: 12,
                        }}
                      >
                        {part.stat}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            <div
              style={{
                borderRadius: 24,
                border: '1px solid rgba(148, 163, 184, 0.16)',
                background:
                  'radial-gradient(circle at top, rgba(56, 189, 248, 0.12), transparent 35%), rgba(2, 6, 23, 0.72)',
                padding: 20,
                display: 'grid',
                alignContent: 'start',
                gap: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: '#94a3b8',
                  fontSize: 13,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                }}
              >
                <ShieldAlert size={16} />
                Leitura crítica
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPart.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  style={{ display: 'grid', gap: 16 }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 18,
                      display: 'grid',
                      placeItems: 'center',
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                    }}
                  >
                    <selectedPart.icon size={28} />
                  </div>

                  <div style={{ display: 'grid', gap: 8 }}>
                    <div
                      style={{
                        color: '#38bdf8',
                        fontSize: 13,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                      }}
                    >
                      {selectedPart.label}
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        color: '#f8fafc',
                        fontSize: '1.7rem',
                        lineHeight: 1.08,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {selectedPart.title}
                    </h3>
                  </div>

                  <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.78 }}>
                    {selectedPart.details}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 10,
                      paddingTop: 4,
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        borderRadius: 999,
                        padding: '8px 12px',
                        background: 'rgba(148, 163, 184, 0.10)',
                        border: '1px solid rgba(148, 163, 184, 0.14)',
                        color: '#e2e8f0',
                      }}
                    >
                      <ArrowRight size={15} />
                      {selectedPart.stat}
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        borderRadius: 999,
                        padding: '8px 12px',
                        background: 'rgba(168, 85, 247, 0.10)',
                        border: '1px solid rgba(168, 85, 247, 0.18)',
                        color: '#e2e8f0',
                      }}
                    >
                      <Sparkles size={15} />
                      O smartphone não determina o social; o social molda o smartphone.
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginTop: 28 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#22c55e',
                boxShadow: '0 0 24px rgba(34, 197, 94, 0.45)',
              }}
            />
            <h2
              style={{
                margin: 0,
                color: '#f8fafc',
                fontSize: '1.65rem',
                letterSpacing: '-0.04em',
              }}
            >
              Considerações Finais
            </h2>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            style={{
              ...cardBase,
              borderRadius: 28,
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(34, 197, 94, 0.08), transparent 35%, rgba(56, 189, 248, 0.06))',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', display: 'grid', gap: 14 }}>
              <div
                style={{
                  color: '#22c55e',
                  fontSize: 13,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                }}
              >
                SCOT, Bijker & Pinch, 1987
              </div>
              <p style={{ margin: 0, color: '#e2e8f0', lineHeight: 1.85, fontSize: '1.02rem' }}>
                A análise desenvolvida neste trabalho assentou na teoria SCOT (Social Construction
                of Technology), proposta por Bijker e Pinch em 1987, para demonstrar que o
                smartphone não é um objeto neutro, mas sim um artefacto socialmente construído.
                A sua história revela tensões entre democratização e exclusão, entre autenticidade e
                performance, e entre convergência e fragmentação, mostrando que cada avanço técnico
                reorganiza práticas, valores e desigualdades.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginTop: 28 }}
        >
          <div
            style={{
              ...cardBase,
              borderRadius: 28,
              padding: '24px',
            }}
          >
            <button
              type="button"
              onClick={() => setShowRefs((current) => !current)}
              style={{
                appearance: 'none',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                border: '1px solid rgba(148, 163, 184, 0.16)',
                borderRadius: 22,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(2, 6, 23, 0.9))',
                color: '#f8fafc',
                padding: '16px 18px',
                cursor: 'pointer',
                boxShadow: '0 16px 36px rgba(2, 6, 23, 0.28)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem' }}>
                <BookOpen size={18} />
                Ver Referências Bibliográficas
              </span>
              <ChevronDown
                size={18}
                style={{
                  color: '#94a3b8',
                  transform: showRefs ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 220ms ease',
                }}
              />
            </button>

            <AnimatePresence>
              {showRefs ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      marginTop: 16,
                      padding: '18px 18px 8px',
                      borderRadius: 22,
                      background: 'rgba(15, 23, 42, 0.62)',
                      border: '1px solid rgba(148, 163, 184, 0.12)',
                      display: 'grid',
                      gap: 12,
                    }}
                  >
                    {footerReferences.map((reference) => (
                      <div
                        key={reference}
                        style={{
                          color: '#cbd5e1',
                          lineHeight: 1.7,
                          paddingBottom: 10,
                          borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
                        }}
                      >
                        {reference}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.footer>
      </main>
    </div>
  )
}

export default App
