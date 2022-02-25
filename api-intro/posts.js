// display posts
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => displayPosts(data));
  }
  loadPosts();
  function displayPosts(posts) {
      const postContainer = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post'); //adding a new class name
        div.innerHTML = `
        <h3> ${post.id}- New title: ${post.title}</h3>
        <p>New description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
  }