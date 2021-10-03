const tweets = document.getElementsByClassName("tweetContent")
for (tweet of tweets) {
  let text = tweet.innerHTML;
  text = text.replace(/([@#])([a-z\d_]+)/ig, function (_, marker, tag) {
    if (marker === "@")
      return `<a class="mentionAndHashtag" href="/${tag}">@` + tag + '</a>';
    return `<a class="mentionAndHashtag" href="/hashtag/${tag}">#${tag}</a>`;
  });
  tweet.innerHTML = text
};


const commentsSpans = document.getElementsByClassName("comments")
const retweetsSpans = document.getElementsByClassName("retweets")
const likesSpans = document.getElementsByClassName("likes")

function renderNumbers(spans) {
  for (span of spans) {
    number = parseInt(span.innerText)
    if (number >= 1000000000) {
      span.innerText = `${number / 1000000}B`
    } else if (number >= 1000000) {
      span.innerText = `${number / 1000000}M`
    } else if (number >= 1000) {
      span.innerText = `${number / 1000}K`
    }
  }
}
renderNumbers(commentsSpans)
renderNumbers(retweetsSpans)
renderNumbers(likesSpans)