const getSuspender = (promise) => {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "200";
        response = res.data.data;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };
  
  export default getSuspender;
  