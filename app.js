const form = document.querySelector("#form");
const input = document.querySelector("#url");
const result = document.querySelector("#result");

const sites = [
  ["YouTube", /(youtube\.com|youtu\.be)/i],
  ["Facebook", /facebook\.com/i],
  ["TikTok", /tiktok\.com/i],
  ["Instagram", /instagram\.com/i]
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = input.value.trim();
  const found = sites.find(([, rx]) => rx.test(url));

  result.classList.remove("hidden");

  if (!found) {
    result.innerHTML =
      "<strong>Link not recognized</strong>Please paste a YouTube, Facebook, TikTok or Instagram URL.";
    return;
  }

  result.innerHTML =
    `<strong>${found[0]} link detected</strong>` +
    "This demo identifies the platform. It does not bypass platform restrictions or download protected content.";
});
