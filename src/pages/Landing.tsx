import { motion } from "framer-motion";
import {
  Baby,
  BookOpen,
  Hand,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Music,
  PencilLine,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";

const WHATSAPP_NUMBER = "5569993325000";
const WHATSAPP_DISPLAY = "(69) 9 9332-5000";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi o site do Educandário Primeiros Passos 🍼 e gostaria de saber mais sobre a creche.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const INSTAGRAM_URL = "https://www.instagram.com/primeirospassosvha/";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function DoodleStar({ className, color }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c.6 2.6.9 4.4 1.8 5.5 1 1.2 2.9 1.3 5.7 1.4-2 1.8-3.2 2.9-3.5 4-.3 1.2.5 2.9 2 5.6-2.6-.9-4.4-1.3-5.6-.8-1.2.5-2.3 2-3.9 4.3-.5-2.7-.9-4.4-1.9-5.4-1-1-2.8-1.3-5.7-1.3 2.2-1.6 3.5-2.7 3.8-3.9.3-1.2-.3-2.9-1.7-5.3 2.5.7 4.3.9 5.5.3 1.2-.6 2.2-2.1 3.5-4.4Z"
        stroke={color ?? "currentColor"}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleFootsteps({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden="true">
      {/* left foot */}
      <ellipse cx="42" cy="34" rx="13" ry="20" transform="rotate(-12 42 34)" stroke="var(--primary)" strokeWidth="2.2" />
      <circle cx="31.5" cy="16.5" r="3.4" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="38" cy="14" r="3.4" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="45" cy="14.5" r="3.4" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="51.5" cy="17.5" r="3" stroke="var(--primary)" strokeWidth="2" />
      {/* right foot */}
      <ellipse cx="80" cy="62" rx="13" ry="20" transform="rotate(11 80 62)" stroke="var(--secondary-foreground)" strokeWidth="2.2" opacity="0.55" />
      <circle cx="69" cy="43.5" r="3.4" stroke="var(--secondary-foreground)" strokeWidth="2" opacity="0.55" />
      <circle cx="75.5" cy="41" r="3.4" stroke="var(--secondary-foreground)" strokeWidth="2" opacity="0.55" />
      <circle cx="82.5" cy="41.5" r="3.4" stroke="var(--secondary-foreground)" strokeWidth="2" opacity="0.55" />
      <circle cx="89" cy="44.5" r="3" stroke="var(--secondary-foreground)" strokeWidth="2" opacity="0.55" />
    </svg>
  );
}

function WaButton({
  big,
  className,
}: {
  big?: boolean;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
        big ? "px-7 py-4 text-lg" : "px-5 py-2.5 text-sm"
      } bg-[var(--wa)] hover:bg-[var(--wa-hover)] ${className ?? ""}`}
    >
      <MessageCircle className={big ? "h-6 w-6" : "h-5 w-5"} />
      Falar no WhatsApp
    </a>
  );
}

/** Sticky-note activity card with a tape strip on top */
function Note({
  icon,
  title,
  children,
  rotate,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  rotate: string;
  tone: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`sticky-note relative flex flex-col rounded-md px-6 pt-8 pb-6 ${tone}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="tape absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 rounded-sm" />
      <div className="mb-2 text-primary">{icon}</div>
      <h3 className="font-hand text-2xl font-bold leading-tight">{title}</h3>
      <p className="mt-2 font-note text-[15px] leading-relaxed opacity-80">{children}</p>
    </motion.div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-20 border-b border-border/70 bg-[var(--page)]/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Baby className="h-5.5 w-5.5 text-primary" />
            </div>
            <div className="leading-tight">
              <span className="font-hand block text-xl font-bold">
                Primeiros Passos
              </span>
              <span className="block text-[11px] tracking-wide text-muted-foreground uppercase">
                Educandário • Vilhena–RO
              </span>
            </div>
          </div>
          <WaButton />
        </div>
      </header>

      {/* ===== Paper column ===== */}
      <main className="mx-auto max-w-5xl px-3 pb-16 pt-6 sm:px-6">
        <div className="paper-grain notebook-page relative overflow-hidden rounded-lg shadow-[0_18px_50px_-20px_oklch(0.3_0.05_255/35%)]">
          <div className="relative z-[2]">

            {/* Page top — “school notebook” heading strip */}
            <div className="margin-pad flex items-end justify-between gap-4 border-b-2 border-dashed border-primary/30 py-4 pr-6">
              <p className="font-hand text-lg text-muted-foreground sm:text-xl">
                Nome:{" "}
                <span className="font-bold text-foreground">
                  Educandário Primeiros Passos
                </span>
              </p>
              <p className="font-hand hidden text-lg text-muted-foreground sm:block">
                Assunto: <span className="font-semibold text-primary">primeiros passos 🍼</span>
              </p>
            </div>

            {/* ===== HERO: services & activities ===== */}
            <section className="margin-pad px-0 pt-10 pb-12 pr-6 sm:pr-10 lg:pr-16">
              <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
                <div>
                  <motion.p {...fadeUp} className="font-note mb-3 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1 text-xs font-bold tracking-wide text-secondary-foreground uppercase"
                  >
                    <PencilLine className="h-3.5 w-3.5" />
                    Creche / Maternal
                  </motion.p>
                  <motion.h1
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.05 }}
                    className="font-hand text-5xl leading-[1.05] font-bold sm:text-6xl"
                  >
                    Aqui cada dia é uma{" "}
                    <span className="highlight">página nova</span> nos primeiros
                    passos do seu bebê.
                  </motion.h1>
                  <motion.p
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.1 }}
                    className="font-note mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
                  >
                    Educandário Primeiros Passos: crianças de{" "}
                    <strong className="text-foreground">6 meses a 3 anos</strong>,
                    um espaço seguro, alimentação saudável e atividades
                    adequadas à faixa etária.
                  </motion.p>
                  <motion.div
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.15 }}
                    className="mt-8 flex flex-wrap items-center gap-4"
                  >
                    <WaButton big />
                    <span className="font-hand text-xl text-muted-foreground">
                      — resposta rapidinho! ✎
                    </span>
                  </motion.div>
                </div>

                {/* Hero note card */}
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="relative">
                  <div className="sticky-note relative rotate-1 rounded-md bg-[var(--note-yellow)] px-6 py-6">
                    <div className="tape absolute -top-3 left-6 h-6 w-20 -rotate-3 rounded-sm" />
                    <h2 className="font-hand text-2xl font-bold">
                      O que oferecemos
                    </h2>
                    <ul className="notebook-lines mt-3">
                      {[
                        { icon: <Baby className="h-4.5 w-4.5" />, label: "Berçário e maternal (06m a 03a)" },
                        { icon: <UtensilsCrossed className="h-4.5 w-4.5" />, label: "Alimentação saudável todo dia" },
                        { icon: <ShieldCheck className="h-4.5 w-4.5" />, label: "Espaço seguro e acolhedor" },
                        { icon: <PencilLine className="h-4.5 w-4.5" />, label: "Atividades para cada fase" },
                      ].map((item) => (
                        <li key={item.label} className="flex h-9 items-center gap-2.5 font-note text-[15px]">
                          <span className="text-primary">{item.icon}</span>
                          {item.label}
                          <span className="ml-auto text-lg text-primary">✓</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <DoodleFootsteps className="-mt-4 ml-auto h-20 w-24 opacity-90" />
                </motion.div>
              </div>
            </section>

            {/* ===== ATIVIDADES (sticky notes) ===== */}
            <section className="border-y border-dashed py-12" style={{ borderColor: "var(--border)" }}>
              <div className="margin-pad pr-6">
                <motion.h2 {...fadeUp} className="font-hand text-4xl font-bold sm:text-5xl">
                  No dia a dia da turma <span className="text-primary">✎</span>
                </motion.h2>
                <motion.p {...fadeUp} className="font-note mt-2 max-w-xl text-muted-foreground">
                  Rotinas que aparecem nas publicações do educandário — sempre
                  pensadas para a fase de cada criança.
                </motion.p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                  <Note icon={<Hand className="h-7 w-7" />} title="Estimulação manual" rotate="-1.5deg" tone="bg-[var(--note-pink)]">
                    Massinhas, pegadas e pequenos gestos que desenvolvem
                    autonomia desde cedo.
                  </Note>
                  <Note icon={<BookOpen className="h-7 w-7" />} title="Contação de histórias" rotate="1deg" tone="bg-[var(--note-blue)]">
                    Leitura em voz alta é prática <strong>diária</strong> aqui —
                    imaginação é matéria-prima.
                  </Note>
                  <Note icon={<Music className="h-7 w-7" />} title="Musicalização" rotate="-1deg" tone="bg-[var(--note-green)]">
                    Ritmo, sons e canções: a turma canta, dança e descobre o
                    mundo com música.
                  </Note>
                  <Note icon={<Heart className="h-7 w-7" />} title="Cuidado de verdade" rotate="1.5deg" tone="bg-[var(--note-yellow)]">
                    Rotina afetiva e atenciosa: espaço seguro e alimentação
                    saudável todos os dias.
                  </Note>
                </div>
              </div>
            </section>

            {/* ===== FICHA (quiz-style info) ===== */}
            <section className="margin-pad py-12 pr-6 sm:pr-10">
              <motion.h2 {...fadeUp} className="font-hand text-4xl font-bold sm:text-5xl">
                Fichinha do caderno <span className="text-primary">📝</span>
              </motion.h2>
              <motion.div {...fadeUp} className="notebook-lines mt-8 max-w-3xl">
                {[
                  {
                    q: "Quem atende?",
                    a: "Crianças de 6 meses a 3 anos — creche e maternal.",
                  },
                  {
                    q: "Onde estamos?",
                    a: "Vilhena, Rondônia. Endereço e visita: combine pelo WhatsApp.",
                  },
                  {
                    q: "Como funciona?",
                    a: "Espaço seguro, alimentação saudável e atividades adequadas à faixa etária.",
                  },
                  {
                    q: "O que faço agora?",
                    a: "Clico no botão verde lá embaixo e falo com a gente no WhatsApp. 😉",
                  },
                ].map((row, i) => (
                  <div key={row.q} className="flex h-11 items-baseline gap-3">
                    <span className="font-hand text-lg font-bold text-primary shrink-0 w-6">
                      {i + 1}.
                    </span>
                    <span className="font-hand text-lg font-semibold shrink-0 sm:w-36 sm:text-xl">
                      {row.q}
                    </span>
                    <span className="font-note truncate text-[15px] text-muted-foreground">
                      {row.a}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeUp} className="relative mt-10 inline-block">
                <div className="sticky-note rotate-1 rounded-md bg-[var(--page)] border border-border px-6 py-5">
                  <p className="font-hand text-2xl font-bold">
                    Matrículas e dúvidas
                  </p>
                  <p className="font-note mt-1 text-muted-foreground">
                    Nos chame no WhatsApp{" "}
                    <strong className="text-foreground">{WHATSAPP_DISPLAY}</strong>
                  </p>
                </div>
                <DoodleStar
                  color="var(--accent)"
                  className="absolute -top-6 -right-8 h-10 w-10 rotate-12"
                />
              </motion.div>
            </section>

            {/* ===== CTA FINAL ===== */}
            <section
              id="contato"
              className="margin-pad border-t-2 border-dashed border-primary/30 py-12"
            >
              <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <motion.h2 {...fadeUp} className="font-hand text-4xl font-bold sm:text-5xl">
                    Vamos conversar?
                  </motion.h2>
                  <motion.p {...fadeUp} className="font-note mt-3 max-w-md text-lg text-muted-foreground">
                    Interação de verdade, do outro lado do chip: tire dúvidas,
                    agende uma visita ou comece a matrícula hoje mesmo.
                  </motion.p>
                  <motion.div {...fadeUp} className="mt-6 flex flex-wrap items-center gap-5">
                    <WaButton big />
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-[var(--page)] px-4 py-2.5 font-note text-sm font-bold transition-colors hover:border-primary/50 hover:bg-muted"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                      @primeirospassosvha
                    </a>
                  </motion.div>
                </div>
                <motion.div {...fadeUp} className="mx-auto text-center">
                  <div className="sticky-note inline-flex rotate-2 flex-col items-center gap-2 rounded-lg bg-[var(--note-green)] px-8 py-6">
                    <MessageCircle className="h-9 w-9" />
                    <span className="font-hand text-2xl font-bold leading-tight">
                      WhatsApp
                    </span>
                    <span className="font-note text-sm font-bold">
                      {WHATSAPP_DISPLAY}
                    </span>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="margin-pad border-t border-dashed py-6" style={{ borderColor: "var(--border)" }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-note text-xs text-muted-foreground">
                  <span className="align-super">†</span> Este site não exibe
                  imagens de crianças reais, em respeito à LGPD.{" "}
                  <span className="text-[11px]">
                    (Detalhes responsáveis do caderno)
                  </span>
                </p>
                <p className="font-hand text-sm text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  Vilhena–RO • Primeiros Passos
                </p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
