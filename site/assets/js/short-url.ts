const shortUrlButton = document.getElementById("copy-short-url-button");
const shortUrlConfirmation = document.getElementById("short-url-confirmation");

if (shortUrlButton && shortUrlConfirmation) {
  const shortUrl = shortUrlButton.dataset.shortUrl;

  shortUrlButton.addEventListener("click", () => {
    navigator.clipboard.writeText(shortUrl).then(() => (shortUrlConfirmation.hidden = false));

    setTimeout(() => {
      shortUrlConfirmation.hidden = true;
    }, 1500);
  });
}
