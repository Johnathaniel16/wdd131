// === Step 1: Fix the Menu ===
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("#site-nav");

function toggleMenu() {
  const isOpen = nav.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
  if (window.innerWidth >= 1000) {
  
    nav.classList.add("show");
    menuButton.setAttribute("aria-expanded", "true");
  } else {

    nav.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  }
}
handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(imageURL, altText = "") {
  const dlg = document.createElement("dialog");
  dlg.className = "viewer";
  dlg.innerHTML = `
    <div class="viewer-content">
      <img src="${imageURL}" alt="${altText}">
      <button class="close-viewer" aria-label="Close image viewer">X</button>
    </div>
  `;
  return dlg;
}


function openViewer(srcSmall, altText) {

  const base = srcSmall.split("-")[0];
  const srcFull = `${base}-full.jpeg`;

  const dialog = viewerTemplate(srcFull, altText);

 
  dialog.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-viewer") || event.target === dialog) {
      dialog.close();
    }
  });

  
  dialog.addEventListener("close", () => dialog.remove());

  document.body.appendChild(dialog);
  dialog.showModal(); 
}


const gallery = document.querySelector(".gallery");
if (gallery) {
  gallery.addEventListener("click", (event) => {
    const img = event.target.closest("img");
    if (!img) return;

    const srcSmall = img.getAttribute("src") || "";
    const altText = img.getAttribute("alt") || "";
    openViewer(srcSmall, altText);
  });
}
