import axios from "axios";

const apiDiscover = async () => {
  const url = "https://api.themoviedb.org/3/discover/movie";
  const apiKey = "93a854c305ae92fed86d6a780c06c862";

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E4NTRjMzA1YWU5MmZlZDg2ZDZhNzgwYzA2Yzg2MiIsInN1YiI6IjY2MTVkZWRhZGMxY2I0MDE3YzFiNWQxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N03-Q0_ojS5txcYt1YFJ7BVd7yBKhUdpq0AkSH9NYE0",
    },
    params: {
      language: "es-ES",
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiDiscover;
