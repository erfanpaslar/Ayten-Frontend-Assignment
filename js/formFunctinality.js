const tweetBtn = document.getElementById('tweetBtn');
const everyOneCanReply = document.getElementById('everyoneCanReply');
document.getElementById("textAreaTweet").addEventListener("keyup", function () {
  if (this.value) {
    tweetBtn.disabled = false;
    everyOneCanReply.style.display = "block";
  } else {
    tweetBtn.disabled = true;
  }
});

const clearIcon = document.getElementById("clearIcon");
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  if (this.value) {
    clearIcon.style.display = "flex";
  } else {
    clearIcon.style.display = "none";
  }
});

clearIcon.addEventListener("click", function () {
  searchInput.value =""
  clearIcon.style.display = "none";
})