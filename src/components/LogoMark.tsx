// Flat, minimal logo mark recreated from the Educandário Primeiros Passos
// logo: a confetti ring around three drawn figures, text below.
export default function LogoMark({ className }: { className?: string }) {
  const confetti = [
    { x: 60, y: 5, stroke: "#F9B233" },
    { x: 60, y: 115, stroke: "#7CB94A" },
    { x: 5, y: 60, stroke: "#E85D6F" },
    { x: 115, y: 60, stroke: "#35A8E0" },
    { x: 18, y: 18, stroke: "#35A8E0" },
    { x: 102, y: 18, stroke: "#7CB94A" },
    { x: 18, y: 102, stroke: "#F9B233" },
    { x: 102, y: 102, stroke: "#E85D6F" },
    { x: 36, y: 7, stroke: "#E85D6F" },
    { x: 84, y: 7, stroke: "#7CB94A" },
    { x: 36, y: 113, stroke: "#35A8E0" },
    { x: 84, y: 113, stroke: "#F9B233" },
    { x: 7, y: 36, stroke: "#F9B233" },
    { x: 7, y: 84, stroke: "#35A8E0" },
    { x: 113, y: 36, stroke: "#7CB94A" },
    { x: 113, y: 84, stroke: "#E85D6F" },
    { x: 11, y: 11, stroke: "#E85D6F" },
    { x: 109, y: 11, stroke: "#F9B233" },
    { x: 11, y: 109, stroke: "#35A8E0" },
    { x: 109, y: 109, stroke: "#7CB94A" },
  ];

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-label="Educandário Primeiros Passos"
      role="img"
    >
      {/* confetti ring */}
      {confetti.map((c, i) => (
        <g
          key={i}
          transform={`translate(${c.x} ${c.y}) rotate(${(i * 40) % 180})`}
        >
          <line
            x1="-7"
            y1="0"
            x2="7"
            y2="0"
            stroke={c.stroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle cx="60" cy="60" r="52" stroke="#35A8E0" strokeWidth="2.5" strokeDasharray="3 7" opacity="0.6" />

      {/* crawling baby (left) */}
      <g stroke="#1F6FB5" strokeWidth="2.6" strokeLinecap="round">
        <circle cx="38" cy="52" r="6" />
        <path d="M43 58c4 6 4 11 0 15" />
        <path d="M43 60l9 2" />
        <path d="M41 74c-4 4-10 5-13 2" />
        <circle cx="50" cy="66" r="2.6" fill="#1F6FB5" stroke="none" />
      </g>

      {/* girl with arms up (center) */}
      <g stroke="#E85D6F" strokeWidth="2.6" strokeLinecap="round">
        <circle cx="62" cy="40" r="6.5" />
        <path d="M57 48c-2 8 0 14 0 18" />
        <path d="M67 48c2 8 0 14 0 18" strokeDasharray="0" />
        <path d="M58 54c-3-3-6-6-9-9" />
        <path d="M66 54c3-3 6-6 9-9" />
        <path d="M57 66h10" />
      </g>

      {/* older kid waving (right) */}
      <g stroke="#7CB94A" strokeWidth="2.6" strokeLinecap="round">
        <circle cx="84" cy="44" r="6.5" />
        <path d="M80 52c0 10 0 16 0 18" />
        <path d="M88 52c0 10 0 16 0 18" strokeDasharray="0" />
        <path d="M83 58c-2 3-5 4-8 4" />
        <path d="M81 70h9" />
      </g>
    </svg>
  );
}
