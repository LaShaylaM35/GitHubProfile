async function getUser() {
  event.preventDefault();

  let user = document.getElementById("user").value;
  let baseurl = `https://api.github.com/users/${user}`;

  let response = await fetch(baseurl);
  let data = await response.json();
  console.log(data);

  let userData = document.getElementById("user-data");
  userData.innerHTML = `User Name: ${data.login} Bio: ${data.bio}  Public Repos: ${data.public_repos} <br>`;

  userData.innerHTML += `<img src="${data.avatar_url}" alt="User Avatar">`;
}
