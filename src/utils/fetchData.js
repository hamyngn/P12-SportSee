import axios from "axios";

  const fetchData = async (url) => {
    let response;
    let error;
    try {
      response = await axios.get(url);
      return ({response: response.data.data, error: error})
    } catch (err) {
      console.error(err.message);
      error = err.message
      return ({response: response, error: error})
    }
  };

export default fetchData;
