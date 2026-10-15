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
const ADDRESS =
  "R. Elvira Crepaldi Mendes, 4953 - Jardim Eldorado, Vilhena - RO, 76987-122";
const MAPS_QUERY = encodeURIComponent(ADDRESS);
/** Embed sem chave de API — o Google redireciona para /maps/embed. */
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&hl=pt-BR&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

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
              src="/assets/Logo_Infantil_Educand_rio_Primeiros_Passos.png"
              alt="Educandário Primeiros Passos"
              width={1254}
              height={1254}
              className="mix-blend-lighten h-14 w-14 shrink-0"
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
            <motion.div
              {...fadeUp}
              className="mx-auto mb-10 w-fit max-w-full lg:mb-0"
            >
              {/* moldura do selo: dá respiro às pinceladas cortadas na borda da
                  imagem e, com mix-blend-lighten, o fundo levemente off-white do
                  PNG (#FDFDFE) se funde no branco puro da página */}
              <div className="rounded-[2rem] border border-[var(--flat-gray)] bg-white p-5 shadow-[0_28px_70px_-45px_rgba(0,53,84,0.6)] sm:p-6 lg:p-7">
                <img
                  src="/assets/Logo_Infantil_Educand_rio_Primeiros_Passos.png"
                  alt="Educandário Primeiros Passos"
                  width={1254}
                  height={1254}
                  className="mix-blend-lighten h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64"
                />
              </div>
            </motion.div>
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
                <span className="text-[var(--flat-red)]">
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
              className="grid gap-4 md:grid-cols-3 lg:col-span-2"
            >
              <div className="flex items-start gap-4 rounded-2xl bg-[var(--flat-red)] p-5 text-white">
                <Baby className="mt-0.5 h-7 w-7 shrink-0" />
                <div>
                  <p className="text-lg font-bold">06 meses a 03 anos</p>
                  <p className="mt-0.5 text-[15px] text-white/90">
                    Turmas por faixa etária, do berçário ao maternal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-[var(--flat-green-light)] p-5 text-[color:var(--flat-ink)]">
                <UtensilsCrossed className="mt-0.5 h-7 w-7 shrink-0" />
                <div>
                  <p className="text-lg font-bold">Alimentação saudável</p>
                  <p className="mt-0.5 text-[15px] text-[color:var(--flat-ink)]/80">
                    Rotina alimentar cuidada todos os dias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-[var(--flat-yellow)] p-5 text-[color:var(--flat-ink)]">
                <ShieldCheck className="mt-0.5 h-7 w-7 shrink-0" />
                <div>
                  <p className="text-lg font-bold">Espaço seguro</p>
                  <p className="mt-0.5 text-[15px] opacity-80">
                    Ambiente acolhedor e atividades para cada fase.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== Atividades (flat blue band) ===== */}
        <section className="text-primary-foreground bg-[var(--flat-blue)]">
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
                  <div className="text-[var(--flat-red)]">{item.icon}</div>
                  <p className="mt-3 font-bold">{item.title}</p>
                  <p className="text-muted-foreground mt-1.5 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA + mapa (flat yellow band) ===== */}
        <section id="contato" className="mx-auto max-w-6xl px-5 pb-20">
          <motion.div
            {...fadeUp}
            className="bg-[var(--flat-yellow-light)] rounded-3xl px-6 py-14 sm:px-14 sm:py-16 lg:py-20"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
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
                <div className="border-[color:var(--flat-ink)]/15 mt-9 border-t pt-7">
                  <p className="text-accent-foreground/60 text-xs font-semibold tracking-wide uppercase">
                    WhatsApp
                  </p>
                  <p className="text-accent-foreground mt-1 text-2xl font-bold">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <p className="text-accent-foreground/75 mt-5 flex items-start gap-2 text-[15px] leading-relaxed">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    {ADDRESS}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--flat-ink)]/10 bg-white shadow-sm">
                <iframe
                  title={`Mapa — ${ADDRESS}`}
                  src={MAPS_EMBED_URL}
                  className="h-72 w-full sm:h-80 lg:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                  <p className="text-muted-foreground text-xs">
                    Jardim Eldorado • Vilhena–RO
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--flat-blue)] text-xs font-semibold underline underline-offset-4"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t">
        <div className="text-muted-foreground mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 px-5 py-6 text-xs">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[var(--flat-red)]" />
            Vilhena–RO • Educandário Primeiros Passos
          </p>
        </div>
      </footer>
    </div>
  );
}
