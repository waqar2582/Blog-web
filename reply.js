// reply.js

document.addEventListener("DOMContentLoaded", function () {
  const replyBtn = document.getElementById("replyBtn");
  const replyInput = document.getElementById("replyPost");
  const replyUserContainer = document.querySelector(".ReplyUser");

  // Retrieve existing replies from local storage
  let replies = JSON.parse(localStorage.getItem("replies")) || [];

  // Function to update local storage with new replies
  const updateLocalStorage = () => {
    localStorage.setItem("replies", JSON.stringify(replies));
  };

  // Function to display replies in the UI
  const displayReplies = () => {
    replyUserContainer.innerHTML = "";
    replies.forEach((reply, index) => {
      const replyElement = document.createElement("div");
      replyElement.classList.add("reply-item");

      const replyText = document.createElement("p");
      replyText.textContent = reply;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        // Remove the selected reply from the array
        replies.splice(index, 1);

        // Update local storage
        updateLocalStorage();

        // Display the updated replies in the UI
        displayReplies();
      });

      replyElement.appendChild(replyText);
      replyElement.appendChild(deleteBtn);
      replyUserContainer.appendChild(replyElement);
    });
  };

  // Display existing replies on page load
  displayReplies();

  replyBtn.addEventListener("click", function () {
    const replyText = replyInput.value.trim();

    if (replyText !== "") {
      // Add the new reply to the replies array
      replies.push(replyText);

      // Update local storage
      updateLocalStorage();

      // Display the replies in the UI
      displayReplies();

      // Clear the reply input after adding the reply
      replyInput.value = "";
    }
  });

  const cancelBtn = document.getElementById("CancelBtn");
  cancelBtn.addEventListener("click", function () {
    // Clear the reply input when cancel button is clicked
    replyInput.value = "";
  });
});
