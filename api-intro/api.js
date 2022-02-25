function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// loadData();
function displayUsers(json) {
  // const ul = document.getElementById('users');
  for(const user of json){
    console.log(user.name);
  } 
}
