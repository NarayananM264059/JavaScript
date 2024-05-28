function fetchData(callback) {
    setTimeout(() => {
      let data = "Some data from server";
      callback(data);
    }, 2000); // Simulates a 2-second delay
  }
  
  function handleData(data) {
    console.log("Received data: " + data);
  }
  
  fetchData(handleData); // Output after 2 seconds: Received data: Some data from server
  