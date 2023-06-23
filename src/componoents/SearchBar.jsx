function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit("Apple");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input autoFocus />
      </form>
    </div>
  );
}

export default SearchBar;
