import axios from "axios";

  const fetchData = async (url) => {
    let response;
    try {
      response = await axios.get(url);
    } catch (err) {
      console.error(err.message);
    }
    return response.data.data;
  };

export default fetchData;
