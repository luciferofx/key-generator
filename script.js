document.getElementById("claimBtn").onclick = async function () {
    const token = Math.random().toString(36).substr(2, 10);
    localStorage.setItem("user_token", token);
  
    const redirectURL = `https://luciferofx.github.io/key-generator/verify.html?token=${token}`;
  
    const apiKey = "fd1ee37894834fdf687a5dff8a29180354ed882a";
    const gplinkApi = `https://gplinks.co/api?api=${apiKey}&url=${encodeURIComponent(redirectURL)}`;
  
    try {
      const res = await fetch(gplinkApi);
      const data = await res.json();
  
      console.log("GPLink Response:", data); // 👈 Debug line
  
      if (data.shortenedUrl) {
        window.location.href = data.shortenedUrl;
      } else {
        alert("Error creating GPLink. Please check API key and logs.");
      }
    } catch (error) {
      alert("Something went wrong with GPLink.");
      console.error("GPLink Error:", error); // 👈 Full error log
    }
  };
  
