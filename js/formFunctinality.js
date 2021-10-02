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