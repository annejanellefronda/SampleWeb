async function fetchUsers() {
  try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const userList = document.getElementById("userList");
      userList.innerHTML = ""; // Clear list

      users.forEach(user => {
          const li = document.createElement("li");
          li.textContent = `${user.name} (${user.email})`;
          li.className = "bg-white p-2 rounded shadow";
          userList.appendChild(li);
      });

      document.getElementById("userListSection").classList.remove("hidden");
  } catch (error) {
      console.error("Error fetching users:", error);
  }
}

document.getElementById("login").addEventListener("click", async function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
      await signInWithEmailAndPassword(auth, email, password);
      document.getElementById("logout").classList.remove("hidden");
      alert("Login Successful.");
      fetchUsers(); // Fetch users after login
  } catch (error) {
      alert("Login Failed: " + error.message);
  }
});
