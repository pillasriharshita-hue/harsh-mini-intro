// Add ?debug=1 to any URL to visualize hotspot boxes
if (new URLSearchParams(location.search).has("debug")) {
  document.body.classList.add("debug");
}
