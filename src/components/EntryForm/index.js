import "./EntryForm.css";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

export default function EntryForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      <Input id="motto" name="motto" label="Motto" />
      <TextArea id="notes" name="notes" label="Notes" rows="10" />
      <div className="entry-form__content-container">
        <Button>Create</Button>
      </div>
    </form>
  );
}
