document.addEventListener("DOMContentLoaded", function () {
  // Retrieve stored blog posts data
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // Display blog posts on the blog.html page
  const blogContent = document.querySelector(".blog-content");
  const searchInput = document.getElementById("searchInput");

  function displayPosts(postsToDisplay) {
    blogContent.innerHTML = ""; // Clear existing posts on the page

    postsToDisplay.forEach(function (post, index) {
      const postElement = createPostElement(post, index);
      blogContent.appendChild(postElement);
    });
  }

  // Initial display of all posts
  displayPosts(posts);

  // Search functionality
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm)
    );
    displayPosts(filteredPosts);
  });

  // Optional: Function to update the remaining posts on the page
  function updatePostsOnPage() {
    // Clear existing posts on the page
    blogContent.innerHTML = "";

    // Display the updated posts
    posts.forEach(function (post, index) {
      const postElement = createPostElement(post, index);
      blogContent.appendChild(postElement);
    });
  }

  function createPostElement(post, index) {
    const postElement = document.createElement("div");
    postElement.classList.add("box1");

    postElement.innerHTML = `
            <div id="container">
                <h2 id="Heading-post">${post.title}</h2>
                <p id="Category">Category: ${post.category}</p>
                <p id="description">${post.description}</p>
                <button class="delete-btn"> Delete </button>
                <button class="reply-btn"> Reply </button>
            </div>
            <hr>
        `;

    postElement.addEventListener("click", function () {
      // Store the selected post data in localStorage
      localStorage.setItem("selectedPost", JSON.stringify(post));
      // Redirect to the blog.html page
      window.location.href = "blog.html";
    });

    const deleteButton = postElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      posts.splice(index, 1);
      localStorage.setItem("blogPosts", JSON.stringify(posts));
      blogContent.removeChild(postElement);
      updatePostsOnPage();
    });

    const replyButton = postElement.querySelector(".reply-btn");
    replyButton.addEventListener("click", function () {
      showReplyForm(post, index);
    });

    return postElement;
  }

  function showReplyForm(post, index) {
    // You can customize this part based on your requirements
    const replyContainer = document.querySelector(".reply");
    const replyTextarea = document.getElementById("replyPost");
    const replyBtnContainer = document.querySelector(".replyBtnContainer");

    // Show the reply form
    replyContainer.style.display = "block";

    // Set up the reply button click event
    const replyBtn = document.getElementById("replyBtn");
    replyBtn.addEventListener("click", function () {
      const replyText = replyTextarea.value.trim();
      if (replyText) {
        // Add the reply to the post
        if (!post.replies) {
          post.replies = [];
        }
        post.replies.push(replyText);

        // Save the updated posts to localStorage
        localStorage.setItem("blogPosts", JSON.stringify(posts));

        // Display the updated posts
        updatePostsOnPage();

        // Hide the reply form
        replyContainer.style.display = "none";
        replyTextarea.value = ""; // Clear the reply textarea
      } else {
        alert("Please enter a valid reply.");
      }
    });

    // Set up the Cancel button click event
    const cancelBtn = document.getElementById("CancelBtn");
    cancelBtn.addEventListener("click", function () {
      // Hide the reply form
      replyContainer.style.display = "none";
      replyTextarea.value = ""; // Clear the reply textarea
    });
  }
});
