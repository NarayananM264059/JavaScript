function fetchUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(user => {
        console.log("User:", user);
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
  }
  
  fetchUser(); // Fetches user data and logs it to the console
  