const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("menuOverlay");
const toggleBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("menuClose");

toggleBtn.onclick = () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
};

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;