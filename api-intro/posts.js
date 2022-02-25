// display posts
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => displayPosts(posts));
  }
  
  function displayPosts(posts) {
    for (const post of posts){
      console.log(post.title);
    }
  }