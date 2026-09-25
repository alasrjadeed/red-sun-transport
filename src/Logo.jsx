const base = import.meta.env.BASE_URL

export function LogoMark({ className = '', alt = 'Red Sun' }) {
  return <img src={`${base}logo-mark.png`} alt={alt} className={`logo-mark ${className}`} />
}

export function LogoLockup({ className = '', alt = 'Red Sun Transport' }) {
  return <img src={`${base}logo-lockup.png`} alt={alt} className={`logo-lockup ${className}`} />
}