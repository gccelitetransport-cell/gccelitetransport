// Original vector artwork. Swap for real photography by replacing these components with <Image/>.
export function HeroScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B1F33" />
          <stop offset=".55" stopColor="#123B5D" />
          <stop offset="1" stopColor="#c58a4a" />
        </linearGradient>
        <radialGradient id="sun" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#f3d58c" stopOpacity=".95" />
          <stop offset="1" stopColor="#C9A14A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2b3c" />
          <stop offset="1" stopColor="#0a1622" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1020" cy="560" r="260" fill="url(#sun)" />
      <circle cx="1020" cy="575" r="52" fill="#f6dfa4" opacity=".9" />
      <g fill="#0b1b2b" opacity=".92">
        <rect x="720" y="470" width="34" height="110" /><rect x="760" y="430" width="28" height="150" />
        <rect x="796" y="395" width="36" height="185" /><path d="M838 580V380l12-40 12 40v200Z" />
        <rect x="868" y="455" width="40" height="125" /><rect x="914" y="490" width="30" height="90" />
        <rect x="1110" y="500" width="36" height="80" /><rect x="1152" y="460" width="30" height="120" />
        <rect x="1188" y="520" width="44" height="60" /><rect x="640" y="520" width="38" height="60" />
      </g>
      <rect y="580" width="1600" height="320" fill="#0d1a27" />
      <path d="M0 900L720 580H1000L1700 900Z" fill="url(#road)" />
      <path d="M860 585L835 900H885Z" fill="#C9A14A" opacity=".0" />
      <g stroke="#e9eef4" strokeLinecap="round" opacity=".75">
        <path d="M860 590L858 620" strokeWidth="3" /><path d="M859 650L855 700" strokeWidth="6" />
        <path d="M857 740L849 820" strokeWidth="10" />
      </g>
      <path d="M720 580L0 900M1000 580L1700 900" stroke="#C9A14A" strokeWidth="3" opacity=".55" />
    </svg>
  );
}

export function CountryScene({ hue }: { hue: string }) {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`g${hue.slice(1)}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B1F33" />
          <stop offset="1" stopColor={hue} />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill={`url(#g${hue.slice(1)})`} />
      <circle cx="310" cy="92" r="26" fill="#C9A14A" opacity=".85" />
      <g fill="#07131f" opacity=".85">
        <rect x="40" y="120" width="24" height="70" /><rect x="70" y="95" width="20" height="95" />
        <rect x="96" y="132" width="30" height="58" /><rect x="132" y="108" width="18" height="82" />
        <rect x="156" y="140" width="34" height="50" />
      </g>
      <rect y="186" width="400" height="34" fill="#07131f" />
      <path d="M0 220L170 186H230L400 220Z" fill="#162636" />
      <path d="M200 188L196 220" stroke="#e9eef4" strokeWidth="2" strokeDasharray="6 5" opacity=".7" />
    </svg>
  );
}

export function Vehicle({ id, w, h }: { id: string; w: number; h: number }) {
  const wheel = (cx: number) => (
    <g key={cx}><circle cx={cx} cy={h - 14} r="13" fill="#0B1F33" /><circle cx={cx} cy={h - 14} r="5" fill="#C9A14A" opacity=".8" /></g>
  );
  const body: Record<string, string> = {
    sedan: `M10 ${h - 26}Q14 ${h - 38} 60 ${h - 42}L100 ${h - 62}Q170 ${h - 66} 215 ${h - 44}L270 ${h - 38}Q292 ${h - 34} 292 ${h - 24}Z`,
    suv: `M10 ${h - 26}L22 ${h - 50}L70 ${h - 62}L112 ${h - 82}H225L262 ${h - 56}L288 ${h - 48}Q294 ${h - 40} 292 ${h - 26}Z`,
    lsuv: `M10 ${h - 26}L22 ${h - 54}L74 ${h - 66}L116 ${h - 90}H255L296 ${h - 58}L314 ${h - 50}Q318 ${h - 40} 316 ${h - 26}Z`,
    van: `M10 ${h - 26}V${h - 70}Q10 ${h - 94} 40 ${h - 96}H228L274 ${h - 62}L312 ${h - 52}Q316 ${h - 40} 314 ${h - 26}Z`,
    bus: `M10 ${h - 26}V${h - 84}Q10 ${h - 100} 28 ${h - 100}H300L340 ${h - 64}L352 ${h - 54}V${h - 26}Z`,
  };
  const wheels = id === "bus" ? [70, 280] : id === "van" || id === "lsuv" ? [68, 254] : [66, 238];
  return (
    <svg viewBox={`0 0 ${w + 20} ${h}`} className="h-full w-full" role="img" aria-label="Vehicle illustration">
      <ellipse cx={(w + 20) / 2} cy={h - 3} rx={w / 2.2} ry="4" fill="#0B1F33" opacity=".12" />
      <path d={body[id]} fill="#123B5D" />
      <path d={body[id]} fill="none" stroke="#C9A14A" strokeWidth="1.2" opacity=".7" transform="translate(0,-1)" />
      <path d={`M${w * 0.34} ${h - 60}H${w * 0.72}L${w * 0.82} ${h - 40}H${w * 0.3}Z`} fill="#cfe0ee" opacity=".7" />
      {wheels.map(wheel)}
    </svg>
  );
}
