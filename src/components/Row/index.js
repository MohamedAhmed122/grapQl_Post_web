export default function Row({ text, onClick, Icon, ...props }) {
  return (
    <div className="flex" style={{ cursor: "pointer" }} onClick={onClick}>
      <p style={{ color: "gray", marginRight: 10 }}>{text}</p>
      <Icon {...props} />
    </div>
  );
}
