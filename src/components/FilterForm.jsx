export default function FilterForm({ value, onChange }) {
  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="title-filter">Filter posts by title</label>
      <input
        id="title-filter"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Type a title keyword..."
      />
    </form>
  );
}
