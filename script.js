const getKeyBtn = document.getElementById("getKeyBtn");
const keyBox = document.getElementById("keyBox");
const keyText = document.getElementById("keyText");

const GP_API_KEY = "fd1ee37894834fdf687a5dff8a29180354ed882a"; // Replace with your GPLinks API key
const REDIRECT_URL = "https://yourdomain.com/key-generator/?watched=true"; // After ad completion

// Check if returned from ad
const urlParams = new URLSearchParams(window.location.search);
const watched = urlParams.get("watched");

// If user came from ad, generate KeyAuth key
if (watched === "true") {
  fetch('https://keyauth.win/api/seller/?sellerkey=YOUR_KEYAUTH_SELLER_KEY&type=add&expiry=1&mask=true&format=text')
    .then(res => res.text())
    .then(key => {
      keyBox.style.display = "block";
      keyText.innerText = key;
    })
    .catch(err => {
      alert("Failed to generate key.");
    });
}

getKeyBtn.onclick = () => {
  const apiURL = `https://gplinks.in/api?api=${GP_API_KEY}&url=${encodeURIComponent(REDIRECT_URL)}`;

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      if (data.shortenedUrl) {
        window.location.href = data.shortenedUrl;
      } else {
        alert("Failed to shorten link");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong");
    });
};
