import axios from "axios";

const apiRequest = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID QJjxiwYXTyiGzAiic5As2nDFIgD9aUxnz9otbNtsB-s",
    },
    params: {
      query: term,
    },
  });

  console.log(response);
  return response.data.results;
};

export default apiRequest;
