import { useState } from "react";
import apiRequest from "./componoents/api";
import SearchBar from "./componoents/SearchBar";
import ImageList from "./componoents/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await apiRequest(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
