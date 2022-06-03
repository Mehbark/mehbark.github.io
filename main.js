window.onload = () => {
  let content = document.getElementById("content");
  content.innerText = decodeURI(getHash());
  content.addEventListener("input", () => {
    updateHash(content.innerText);
  });
};

function getHash() {
  return window.location.hash.slice(1);
}

function updateHash(to) {
  window.location.hash = encodeURI(to);
}
