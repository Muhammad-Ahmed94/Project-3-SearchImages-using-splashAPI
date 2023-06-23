import SearchBar from "./componoents/SearchBar";
import apiRequest from "./componoents/api";

function App() {
  const handleSubmit = async (term) => {
    const result = await apiRequest(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
