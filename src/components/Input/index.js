import "./Input.css";
export default function Input({ id, name, label }) {
  return (
    <div>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} name={name} />
    </div>
  );
}
