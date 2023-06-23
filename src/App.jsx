import SearchBar from "./componoents/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("Search Images for", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
