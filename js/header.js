// ===============================
// NAVBAR SIDEBAR
// ===============================

const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

const navLinks = document.querySelectorAll("#sidebar a");


// ===============================
// OPEN SIDEBAR
// ===============================

function openSidebar() {
  sidebar.classList.remove("right-[-100%]");
  sidebar.classList.add("right-0");

  overlay.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}


// ===============================
// CLOSE SIDEBAR
// ===============================

function closeSidebar() {
  sidebar.classList.remove("right-0");
  sidebar.classList.add("right-[-100%]");

  overlay.classList.add("hidden");

  document.body.style.overflow = "auto";
}


// ===============================
// MENU BUTTON CLICK
// ===============================

menuBtn.addEventListener("click", openSidebar);


// ===============================
// CLOSE BUTTON CLICK
// ===============================

closeBtn.addEventListener("click", closeSidebar);


// ===============================
// OVERLAY CLICK CLOSE
// ===============================

overlay.addEventListener("click", closeSidebar);


// ===============================
// ESC KEY CLOSE
// ===============================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSidebar();
  }
});


// ===============================
// MOBILE LINK CLICK CLOSE
// ===============================

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});
  

// Top bar hide button
const closeBtnn = document.getElementById("closeBtn");
const topBarr = document.getElementById("topBar");

closeBtn.addEventListener("click", () => {
  topBar.style.display = "none";
});