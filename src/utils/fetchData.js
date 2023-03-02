import getSuspender from "./getSuspender";
import axios from "axios";

  const fetchData = async (url) => {
    try {
      const response = await axios.get(
          url
      );
      console.log(response.data.data)
      return (response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

export default fetchData;
