// Current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Pause the hero video when the page is hidden
const heroVideo = document.querySelector(".hero-video");

document.addEventListener("visibilitychange", () => {
  if (!heroVideo) return;

  if (document.hidden) {
    heroVideo.pause();
  } else {
    heroVideo.play().catch(() => {});
  }
});
