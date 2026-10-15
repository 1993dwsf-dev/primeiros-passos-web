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
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";

const WHATSAPP_NUMBER = "5569993325000";
const WHATSAPP_DISPLAY = "(69) 9 9332-5000";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi o site do Educandário Primeiros Passos e gostaria de saber mais sobre a creche.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const INSTAGRAM_URL = "https://www.instagram.com/primeirospassosvha/";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

function WaButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[var(--flat-green)] hover:bg-[var(--flat-green-hover)] inline-flex items-center gap-2.5 rounded-full font-semibold text-white transition-colors ${
        big ? "px-7 py-4 text-lg" : "px-5 py-2.5 text-sm"
      }`}
    >
      <MessageCircle className={big ? "h-6 w-6" : "h-5 w-5"} />
      Falar no WhatsApp
    </a>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo-educandario.jpg"
              alt="Educandário Primeiros Passos"
              className="h-11 w-11 shrink-0 rounded-full"
            />
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-tight">
                Primeiros Passos
              </span>
              <span className="block text-xs text-muted-foreground">
                Creche e maternal • Vilhena–RO
              </span>
            </div>
          </div>
          <WaButton />
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <img
              src="/logo-educandario.jpg"
              alt="Educandário Primeiros Passos"
              className="mx-auto mb-5 h-48 w-48 rounded-full sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            />
            <div>
              <motion.p
                {...fadeUp}
                className="text-secondary-foreground mb-4 inline-block rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold"
              >
                Creche / Maternal
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl sm:leading-[1.1]"
              >
                O espaço ideal para os{" "}
                <span className="text-[var(--flat-coral)]">
                  primeiros passos
                </span>{" "}
                do seu bebê.
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-muted-foreground mt-5 max-w-lg text-lg leading-relaxed"
              >
                Cuidamos de crianças de <strong>6 meses a 3 anos</strong> em
                Vilhena–RO, com espaço seguro, alimentação saudável e atividades
                pensadas para cada fase.
              </motion.p>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <WaButton big />
                <span className="text-sm text-muted-foreground">
                  Matrículas e dúvidas: resposta direta no WhatsApp
                </span>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="grid gap-4"
            >
              <div className="bg-[var(--flat-coral)] text-primary-foreground flex items-start gap-4 rounded-2xl p-6">
                <Baby className="mt-0.5 h-8 w-8 shrink-0" />
                <div>
                  <p className="text-xl font-bold">06 meses a 03 anos</p>
                  <p className="mt-0.5 text-white/85 text-[15px]">
                    Turmas por faixa etária, do berçário ao maternal.
                  </p>
                </div>
              </div>
              <div className="bg-[var(--flat-blue)] flex items-start gap-4 rounded-2xl p-6 text-white">
                <UtensilsCrossed className="mt-0.5 h-8 w-8 shrink-0" />
                <div>
                  <p className="text-xl font-bold">Alimentação saudável</p>
                  <p className="mt-0.5 text-white/85 text-[15px]">
                    Rotina alimentar cuidada todos os dias.
                  </p>
                </div>
              </div>
              <div className="bg-[var(--flat-yellow)] flex items-start gap-4 rounded-2xl p-6 text-[color:var(--accent-foreground)]">
                <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0" />
                <div>
                  <p className="text-xl font-bold">Espaço seguro</p>
                  <p className="mt-0.5 text-[15px] opacity-80">
                    Ambiente acolhedor e atividades para cada fase.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== Atividades (flat coral band) ===== */}
        <section className="bg-[var(--flat-coral)] text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <motion.h2
              {...fadeUp}
              className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl"
            >
              O que a turma vive todos os dias
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-2 max-w-md text-white/85 text-[15px]"
            >
              Atividades pensadas para cada faixa etária, em toda a rotina da
              creche.
            </motion.p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Hand className="h-7 w-7" />,
                  title: "Estimulação manual",
                  desc: "Atividades que desenvolvem destreza e autonomia desde cedo.",
                },
                {
                  icon: <BookOpen className="h-7 w-7" />,
                  title: "Contação de histórias",
                  desc: "Leitura em voz alta como parte da rotina diária.",
                },
                {
                  icon: <Music className="h-7 w-7" />,
                  title: "Musicalização",
                  desc: "Ritmo, sons e canções na rotina com as crianças.",
                },
                {
                  icon: <Heart className="h-7 w-7" />,
                  title: "Cuidado e carinho",
                  desc: "Acolhida afetiva e atenção individual em cada turma.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  className="rounded-2xl bg-white p-6 text-foreground"
                >
                  <div className="text-[var(--flat-coral)]">{item.icon}</div>
                  <p className="mt-3 font-bold">{item.title}</p>
                  <p className="text-muted-foreground mt-1.5 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Informação essencial (quadros flat) ===== */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <motion.h2
            {...fadeUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Bom saber
          </motion.h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Baby className="mt-0.5 h-8 w-8 shrink-0" />,
                q: "Quem atende?",
                a: "Crianças de 6 meses a 3 anos, em turmas organizadas por faixa etária.",
                cls: "bg-[var(--flat-coral)] text-primary-foreground",
                sub: "text-white/85",
              },
              {
                icon: <MapPin className="mt-0.5 h-8 w-8 shrink-0" />,
                q: "Onde estamos?",
                a: "R. Elvira Crepaldi Mendes, 4953 - Jardim Eldorado, Vilhena - RO, 76987-122.",
                cls: "bg-[var(--flat-blue)] text-white",
                sub: "text-white/85",
              },
              {
                icon: <MessageCircle className="mt-0.5 h-8 w-8 shrink-0" />,
                q: "Quero realizar a matrícula",
                a: "Fale com a gente no WhatsApp para dúvidas, visita e matrícula.",
                cls: "bg-[var(--flat-yellow)] text-[color:var(--accent-foreground)]",
                sub: "text-[color:var(--accent-foreground)]/75",
              },
            ].map((item) => (
              <motion.div
                {...fadeUp}
                key={item.q}
                className={`flex items-start gap-4 rounded-2xl p-6 ${item.cls}`}
              >
                {item.icon}
                <div>
                  <p className="text-lg font-bold">{item.q}</p>
                  <p className={`mt-1.5 text-[15px] leading-relaxed ${item.sub}`}>
                    {item.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CTA (flat yellow band) ===== */}
        <section id="contato" className="mx-auto max-w-6xl px-5 pb-20">
          <motion.div
            {...fadeUp}
            className="bg-[var(--flat-yellow)] rounded-3xl px-6 py-12 sm:px-12"
          >
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-accent-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                  Vamos conversar?
                </h2>
                <p className="text-accent-foreground/75 mt-3 max-w-md leading-relaxed">
                  Tire dúvidas, agende uma visita ou comece a matrícula — tudo
                  pelo WhatsApp.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <WaButton big />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-foreground inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <Instagram className="h-5 w-5" />
                    @primeirospassosvha
                  </a>
                </div>
              </div>
              <div className="mx-auto text-center">
                <p className="text-accent-foreground/60 text-xs font-semibold tracking-wide uppercase">
                  WhatsApp
                </p>
                <p className="text-accent-foreground mt-1 text-2xl font-bold">
                  {WHATSAPP_DISPLAY}
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t">
        <div className="text-muted-foreground mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 px-5 py-6 text-xs">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[var(--flat-coral)]" />
            Vilhena–RO • Educandário Primeiros Passos
          </p>
        </div>
      </footer>
    </div>
  );
}
