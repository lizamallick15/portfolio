export default function InfoCard({ icon: Icon, label, value, href }) {
  const content = <><span className="info-icon"><Icon size={18} /></span><span><small>{label}</small><strong>{value}</strong></span></>;
  return href ? <a className="info-card" href={href}>{content}</a> : <div className="info-card">{content}</div>;
}
