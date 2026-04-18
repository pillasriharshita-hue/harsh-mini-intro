// Add ?debug=1 to any URL to visualize hotspot boxes
if (new URLSearchParams(location.search).has("debug")) {
  document.body.classList.add("debug");
}

// On portrait mobile, auto-center the horizontal scroll so the girl is visible
function centerHorizontally() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    const page = document.querySelector(".page");
    if (page) {
      const offset = (page.scrollWidth - window.innerWidth) / 2;
      window.scrollTo({ left: offset, top: 0, behavior: "instant" });
    }
  }
}
window.addEventListener("load", centerHorizontally);
window.addEventListener("resize", centerHorizontally);
window.addEventListener("orientationchange", () => {
  setTimeout(centerHorizontally, 100);
});

// Smooth fade-out when navigating to another internal page
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  // Only intercept same-origin page transitions (not mailto, not external)
  const isInternal =
    !link.target &&
    !href.startsWith("mailto:") &&
    !href.startsWith("tel:") &&
    !href.startsWith("http");

  if (!isInternal) return;

  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(() => { window.location.href = href; }, 320);
});
