function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = "Some data from server";
        resolve(data); // Successfully obtained data
        reject("Error fetching data"); // Uncomment to simulate an error
      }, 2000); // Simulates a 2-second delay
    });
  }
  
  async function handleData() {
    try {
      let data = await fetchData();
      console.log("Received data: " + data); // Output after 2 seconds: Received data: Some data from server
    } catch (error) {
      console.error("Error: " + error);
    }
  }
  
  handleData();
  