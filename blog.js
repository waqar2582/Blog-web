document.addEventListener("DOMContentLoaded", function () {
  const saveBtn = document.querySelector(".save-btn");

  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      // Get values from the input and textarea
      const title = document.querySelector(".col-one").value;
      const category = document.querySelector(".col-two-text").value;
      const description = document.querySelector("#Description_input").value;

      // Validate the data (you can add more validation)
      if (title && category && description) {
        // Create an object to store the blog post data

        const post = {
          title: title,
          category: category,
          description: description,
        };

        // Store the blog post data in an array or any storage mechanism
        // For simplicity, using localStorage here. You may consider using Firebase or a server for a real application.
        let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
        posts.push(post);
        localStorage.setItem("blogPosts", JSON.stringify(posts));

        window.location.href = "index.html";
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
