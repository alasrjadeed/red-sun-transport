function Wheel({ cx, cy, r = 14 }) {
  return (
    <g className="wheel" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={r} fill="#1a120b" />
      <circle cx={cx} cy={cy} r={r - 3} fill="#3a322c" stroke="#c4b5a5" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={3.2} fill="#d9cbb8" />
      <path d={`M ${cx} ${cy - r + 4} L ${cx} ${cy + r - 4}`} stroke="#8a7a6a" strokeWidth="1.2" />
      <path d={`M ${cx - r + 4} ${cy} L ${cx + r - 4} ${cy}`} stroke="#8a7a6a" strokeWidth="1.2" />
    </g>
  )
}

function SunDecal({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r="7" fill="#e85d04" />
      <circle r="3.2" fill="#ffba08" opacity="0.9" />
      <path d="M-11 -1 H11 M-9 2 H9" stroke="#9d0208" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  )
}

function Car() {
  return (
    <svg className="fleet-unit fleet-car" viewBox="0 0 230 100" aria-hidden="true">
      <ellipse cx="115" cy="92" rx="88" ry="6" fill="rgba(0,0,0,0.28)" />
      <path d="M28 70 L40 46 C48 32 62 24 86 22 L132 22 C154 22 168 30 178 44 L208 62 C214 66 216 72 214 78 L28 78 Z" fill="#1f1712" />
      <path d="M48 46 L60 34 C68 28 80 24 96 24 L128 24 C146 24 158 30 166 42 L48 46 Z" fill="#3a2418" />
      <path d="M62 44 L72 34 C80 29 90 26 102 26 L124 26 C138 26 148 30 154 40 Z" fill="#7ec8e3" opacity="0.85" />
      <path d="M118 26 L118 44 L152 42 C146 30 136 26 124 26 Z" fill="#5aa7c4" opacity="0.7" />
      <rect x="28" y="70" width="186" height="10" fill="#e85d04" />
      <rect x="198" y="64" width="12" height="8" rx="2" fill="#ffba08" />
      <rect x="32" y="64" width="10" height="7" rx="2" fill="#c1121f" />
      <SunDecal x="188" y="56" s="1.05" />
      <Wheel cx="62" cy="80" r="13" />
      <Wheel cx="176" cy="80" r="13" />
    </svg>
  )
}

function Van() {
  return (
    <svg className="fleet-unit fleet-van" viewBox="0 0 270 118" aria-hidden="true">
      <ellipse cx="135" cy="110" rx="100" ry="6" fill="rgba(0,0,0,0.28)" />
      <path d="M22 86 L22 40 C22 30 30 24 42 24 L168 24 C176 24 182 28 188 36 L230 70 L230 86 Z" fill="#241812" />
      <rect x="22" y="48" width="146" height="38" fill="#2e1c14" />
      <path d="M170 28 L184 42 L226 72 L188 72 L170 42 Z" fill="#7ec8e3" opacity="0.85" />
      <rect x="38" y="54" width="36" height="22" rx="2" fill="#4a3024" />
      <rect x="84" y="54" width="36" height="22" rx="2" fill="#4a3024" />
      <rect x="130" y="54" width="28" height="22" rx="2" fill="#4a3024" />
      <rect x="22" y="84" width="208" height="10" fill="#e85d04" />
      <rect x="218" y="76" width="12" height="8" rx="2" fill="#ffba08" />
      <SunDecal x="56" y="40" s="1.1" />
      <Wheel cx="64" cy="94" r="14" />
      <Wheel cx="196" cy="94" r="14" />
    </svg>
  )
}

function MiniBus() {
  return (
    <svg className="fleet-unit fleet-minibus" viewBox="0 0 320 128" aria-hidden="true">
      <ellipse cx="160" cy="120" rx="118" ry="6" fill="rgba(0,0,0,0.28)" />
      <path d="M18 96 L18 38 C18 28 28 22 40 22 L250 22 C262 22 272 28 278 40 L304 72 L304 96 Z" fill="#1c1410" />
      <rect x="18" y="46" width="258" height="50" fill="#2a1a14" />
      <g fill="#7ec8e3" opacity="0.88">
        <rect x="36" y="36" width="28" height="22" rx="2" />
        <rect x="72" y="36" width="28" height="22" rx="2" />
        <rect x="108" y="36" width="28" height="22" rx="2" />
        <rect x="144" y="36" width="28" height="22" rx="2" />
        <rect x="180" y="36" width="28" height="22" rx="2" />
        <rect x="216" y="36" width="28" height="22" rx="2" />
      </g>
      <path d="M250 28 L272 44 L298 72 L268 72 L250 46 Z" fill="#5eb0d0" opacity="0.85" />
      <rect x="18" y="92" width="286" height="10" fill="#e85d04" />
      <rect x="288" y="82" width="14" height="9" rx="2" fill="#ffba08" />
      <SunDecal x="48" y="78" s="1.15" />
      <Wheel cx="70" cy="104" r="15" />
      <Wheel cx="240" cy="104" r="15" />
    </svg>
  )
}

function Bus() {
  return (
    <svg className="fleet-unit fleet-bus" viewBox="0 0 460 150" aria-hidden="true">
      <ellipse cx="230" cy="142" rx="170" ry="7" fill="rgba(0,0,0,0.3)" />
      <path d="M16 112 L16 36 C16 24 28 16 42 16 L390 16 C410 16 424 26 432 42 L448 78 L448 112 Z" fill="#18120e" />
      <rect x="16" y="48" width="416" height="64" fill="#271910" />
      <g fill="#8ed6ee" opacity="0.9">
        <rect x="40" y="30" width="32" height="26" rx="2" />
        <rect x="80" y="30" width="32" height="26" rx="2" />
        <rect x="120" y="30" width="32" height="26" rx="2" />
        <rect x="160" y="30" width="32" height="26" rx="2" />
        <rect x="200" y="30" width="32" height="26" rx="2" />
        <rect x="240" y="30" width="32" height="26" rx="2" />
        <rect x="280" y="30" width="32" height="26" rx="2" />
        <rect x="320" y="30" width="32" height="26" rx="2" />
      </g>
      <path d="M360 22 L400 22 C414 22 426 30 432 44 L444 72 L390 72 L360 48 Z" fill="#6ec1dc" opacity="0.88" />
      <rect x="16" y="108" width="432" height="12" fill="#e85d04" />
      <rect x="16" y="72" width="432" height="4" fill="#ffba08" opacity="0.7" />
      <rect x="428" y="96" width="16" height="10" rx="2" fill="#ffba08" />
      <SunDecal x="58" y="92" s="1.35" />
      <Wheel cx="86" cy="122" r="17" />
      <Wheel cx="150" cy="122" r="17" />
      <Wheel cx="340" cy="122" r="17" />
      <Wheel cx="400" cy="122" r="17" />
    </svg>
  )
}

function Convoy() {
  return (
    <div className="convoy">
      <div className="fleet-slot">
        <span className="fleet-tag">Car</span>
        <Car />
      </div>
      <div className="fleet-slot">
        <span className="fleet-tag">Van</span>
        <Van />
      </div>
      <div className="fleet-slot">
        <span className="fleet-tag">Mini Bus</span>
        <MiniBus />
      </div>
      <div className="fleet-slot">
        <span className="fleet-tag">Bus</span>
        <Bus />
      </div>
    </div>
  )
}

export default function HeroFleet() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="sky-glow" />
      <img src="/logo-mark.png" alt="" className="hero-sun" />
      <div className="cloud c1" />
      <div className="cloud c2" />
      <div className="cloud c3" />
      <div className="skyline" />
      <div className="heat" />
      <div className="road">
        <div className="road-edge" />
        <div className="lane-wrap">
          <div className="lane" />
        </div>
        <div className="traffic">
          <Convoy />
          <Convoy />
        </div>
      </div>
    </div>
  )
}
