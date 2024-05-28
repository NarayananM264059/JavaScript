async function fetchUser() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let user = await response.json();
      console.log("User:", user);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  fetchUser(); // Fetches user data and logs it to the console
  