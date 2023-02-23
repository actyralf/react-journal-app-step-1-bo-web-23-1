import "./TextArea.css";
export default function TextArea({ id, rows = 10, name, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea className="text-area" id={id} rows={rows} name={name} />
    </div>
  );
}
