function testWebhook() {
  const email = document.getElementById("email").value.trim();
  const url = document.getElementById("url").value.trim();
  const resultDiv = document.getElementById("result");

  if (!email || !url) {
    resultDiv.innerHTML = "Please enter both email and URL.";
    resultDiv.style.color = "red";
    return;
  }

  const testUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=${encodeURIComponent(url)}&email=${encodeURIComponent(email)}`;

  resultDiv.innerHTML = "Testing...";
  resultDiv.style.color = "black";

  fetch(testUrl)
    .then((res) => res.json())
    .then((data) => {
      resultDiv.innerHTML = JSON.stringify(data, null, 2);
      resultDiv.style.color = "green";
    })
    .catch((err) => {
      resultDiv.innerHTML = "Something went wrong. Check your inputs.";
      resultDiv.style.color = "red";
      console.error(err);
    });
}
