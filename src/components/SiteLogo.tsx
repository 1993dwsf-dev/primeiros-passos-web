/**
 * Logotipo do Educandário Primeiros Passos, em vetor.
 *
 * Composição: anel de pinceladas multicoloridas (confete) envolvendo um bebê,
 * uma menina e um menino, com o nome do educandário logo abaixo.
 *
 * Paleta lida do próprio logotipo — a mesma usada como base do tema do site:
 *   vermelho #E02B26 · rosa #D1235C · azul #1A73B8
 *   azul-céu #2E9BD8 · verde #2AA84A · amarelo #FBC400
 */

const RED = "#E02B26";
const PINK = "#D1235C";
const BLUE = "#1A73B8";
const SKY = "#2E9BD8";
const GREEN = "#2AA84A";
const YELLOW = "#FBC400";

const SKIN = "#F9CFA9";
const HAIR = "#6B3A20";
const HAIR_LIGHT = "#8C4E27";
const INK = "#2B1A12";
const DIAPER = "#EAF4FB";
const WHITE = "#FFFFFF";

const CENTER = 150;
/** Anel de pinceladas: cada "dab" é um traço grosso de ponta arredondada. */
const RING_COLORS = [
  YELLOW, SKY, RED, GREEN, BLUE, GREEN, YELLOW, RED, SKY, BLUE,
  GREEN, RED, YELLOW, BLUE, SKY, GREEN, RED, YELLOW, BLUE, GREEN,
  SKY, RED, YELLOW, BLUE, GREEN, RED, GREEN, SKY, BLUE, YELLOW,
];

type Dab = { x1: number; y1: number; x2: number; y2: number; color: string };

const RING_DABS: Dab[] = (() => {
  const dabs: Dab[] = [];
  RING_COLORS.forEach((color, i) => {
    const angle = (360 / RING_COLORS.length) * i - 90;
    const rad = (angle * Math.PI) / 180;
    const tx = -Math.sin(rad);
    const ty = Math.cos(rad);
    // três pinceladas paralelas por grupo, como no logotipo original
    [-7, 0, 7].forEach((offset) => {
      const inner = 116 + Math.abs(offset) * 0.35;
      const outer = 144 - Math.abs(offset) * 0.35;
      const radOuter = ((angle + 11) * Math.PI) / 180;
      dabs.push({
        x1: CENTER + inner * Math.cos(rad) + tx * offset,
        y1: CENTER + inner * Math.sin(rad) + ty * offset,
        x2: CENTER + outer * Math.cos(radOuter) + tx * offset,
        y2: CENTER + outer * Math.sin(radOuter) + ty * offset,
        color,
      });
    });
  });
  return dabs;
})();

const SERIF = "Georgia, 'Times New Roman', 'DejaVu Serif', serif";

function Face({ x, y, r = 2.2 }: { x: number; y: number; r?: number }) {
  return (
    <>
      <circle cx={x} cy={y} r={r} fill={INK} />
      <circle cx={x + 12} cy={y} r={r} fill={INK} />
      <path
        d={`M${x - 1} ${y + 7} q6 6 12 0`}
        stroke={INK}
        strokeWidth={2.2}
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}

/** Bebê, menina e menino — desenhados no espaço local e escalados adiante. */
function Kids() {
  return (
    <g>
      {/* ---------- bebê (esquerda) ---------- */}
      <g stroke={SKIN} strokeWidth={9} strokeLinecap="round" fill="none">
        <path d="M70 122 L56 108" />
        <path d="M98 122 L112 108" />
      </g>
      <circle cx="56" cy="108" r="5" fill={SKIN} />
      <circle cx="112" cy="108" r="5" fill={SKIN} />
      <ellipse cx="84" cy="132" rx="20" ry="17" fill={SKIN} />
      <rect x="65" y="128" width="38" height="19" rx="9" fill={DIAPER} />
      <ellipse cx="67" cy="151" rx="8" ry="5.5" fill={SKIN} />
      <ellipse cx="101" cy="151" rx="8" ry="5.5" fill={SKIN} />
      <circle cx="84" cy="97" r="17" fill={SKIN} />
      <path d="M79 83 q2 -8 9 -5 q-6 1 -5 6 z" fill={HAIR} />
      <Face x={77} y={96} r={2} />

      {/* ---------- menina (centro) ---------- */}
      <g stroke={SKIN} strokeWidth={9} strokeLinecap="round" fill="none">
        <path d="M143 98 L126 72" />
        <path d="M169 98 L186 72" />
      </g>
      <circle cx="126" cy="72" r="5.5" fill={SKIN} />
      <circle cx="186" cy="72" r="5.5" fill={SKIN} />
      <g stroke={SKIN} strokeWidth={8} strokeLinecap="round" fill="none">
        <path d="M149 128 L148 146" />
        <path d="M163 128 L164 146" />
      </g>
      <g stroke={WHITE} strokeWidth={9} strokeLinecap="round" fill="none">
        <path d="M148 143 L148 147" />
        <path d="M164 143 L164 147" />
      </g>
      <ellipse cx="148" cy="153" rx="8" ry="4.5" fill={PINK} />
      <ellipse cx="164" cy="153" rx="8" ry="4.5" fill={PINK} />
      <path d="M139 90 H173 L181 130 H131 Z" fill={PINK} />
      <rect x="134" y="103" width="44" height="5" fill={WHITE} opacity={0.92} />
      <rect x="132" y="115" width="48" height="5" fill={WHITE} opacity={0.92} />
      <rect x="150" y="84" width="12" height="10" fill={SKIN} />
      <circle cx="156" cy="76" r="18" fill={SKIN} />
      <path
        d="M138 74 a18 18 0 0 1 36 0 q-4 -9 -18 -9 q-14 0 -18 9 z"
        fill={HAIR}
      />
      <ellipse cx="139" cy="80" rx="4" ry="8" fill={HAIR} />
      <ellipse cx="173" cy="80" rx="4" ry="8" fill={HAIR} />
      <circle cx="140" cy="63" r="5" fill={RED} />
      <circle cx="147" cy="62" r="5" fill={RED} />
      <Face x={149} y={76} />

      {/* ---------- menino (direita) ---------- */}
      <rect x="203" y="92" width="19" height="34" rx="7" fill={SKY} />
      <g stroke={SKIN} strokeWidth={9} strokeLinecap="round" fill="none">
        <path d="M210 100 C 205 110, 210 116, 218 117" />
        <path d="M246 100 C 251 110, 248 116, 244 117" />
      </g>
      <rect
        x="212"
        y="86"
        width="32"
        height="38"
        rx="7"
        fill={WHITE}
        stroke="#E9EDF2"
        strokeWidth={1.5}
      />
      <rect x="222" y="80" width="12" height="10" fill={SKIN} />
      <g transform="rotate(-8 234 116)">
        <rect x="221" y="108" width="26" height="17" rx="2.5" fill={RED} />
        <path d="M234 110 v13" stroke={WHITE} strokeWidth={1.6} />
      </g>
      <circle cx="218" cy="117" r="5" fill={SKIN} />
      <circle cx="244" cy="117" r="5" fill={SKIN} />
      <rect x="214" y="120" width="11" height="25" rx="4" fill={BLUE} />
      <rect x="231" y="120" width="11" height="25" rx="4" fill={BLUE} />
      <ellipse cx="219" cy="149" rx="9" ry="5" fill={RED} />
      <ellipse cx="236" cy="149" rx="9" ry="5" fill={RED} />
      <circle cx="228" cy="68" r="18" fill={SKIN} />
      <path
        d="M210 66 a18 18 0 0 1 36 0 q-5 -10 -18 -10 q-13 0 -18 10 z"
        fill={HAIR}
      />
      <path d="M212 60 q8 -9 20 -5 q-9 0 -13 8 z" fill={HAIR_LIGHT} />
      <Face x={221} y={68} />
    </g>
  );
}

export default function SiteLogo({
  className,
  title = "Educandário Primeiros Passos",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <g strokeLinecap="round" fill="none">
        {RING_DABS.map((dab, i) => (
          <line
            key={i}
            x1={dab.x1}
            y1={dab.y1}
            x2={dab.x2}
            y2={dab.y2}
            stroke={dab.color}
            strokeWidth={8}
          />
        ))}
      </g>
      <g transform="translate(27.2 23.2) scale(0.8)">
        <Kids />
      </g>
      <g fontFamily={SERIF}>
          <text
            x={150}
            y={180}
            textAnchor="middle"
            textLength={196}
            lengthAdjust="spacingAndGlyphs"
            fill={BLUE}
            fontSize={30}
            fontWeight={700}
          >
            EDUCANDÁRIO
          </text>
          <text
            x={150}
            y={214}
            textAnchor="middle"
            textLength={178}
            lengthAdjust="spacingAndGlyphs"
            fill={RED}
            fontSize={25}
            fontStyle="italic"
            fontWeight={700}
          >
            primeiros passos
          </text>
      </g>
    </svg>
  );
}
