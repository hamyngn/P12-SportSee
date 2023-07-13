import axios from "axios";

  const fetchData = async (url, api) => {
    let response;
    let error;
    try {
      response = await axios.get(url);
      if(api) {
        return ({response: response.data.data, error: error})
      } else {
        return ({response: response.data, error: error})
      }
    } catch (err) {
      console.error(err.message);
      error = err.message
      return ({response: response, error: error})
    }
  };

export default fetchData;
