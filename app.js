async function getUser() {
  event.preventDefault();

  let user = document.getElementById("user").value;
  let baseurl = `https://api.github.com/users/${user}`;

  let response = await fetch(baseurl);
  let data = await response.json();
  console.log(data);

  let userData = document.getElementById("user-data");
  userData.innerHTML = `<ol><li>User Name: ${data.login}</li><li>Bio: ${data.bio}</li><li>Public Repos: ${data.public_repos}</li></ol>`;

  userData.innerHTML += `<img src="${data.avatar_url}" alt="User Avatar">`;
}
