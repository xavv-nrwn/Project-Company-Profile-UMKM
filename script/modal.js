// Mobile menu toggle
function toggleMobileMenu() {
  const m = document.getElementById("mobileMenu");
  m.classList.toggle("hidden");
  m.classList.toggle("flex");
}

// Modal functions
function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.getElementById("formState").classList.remove("hidden");
  document.getElementById("confirmState").classList.add("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.body.style.overflow = "";
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById("formState").classList.add("hidden");
  document.getElementById("confirmState").classList.remove("hidden");
}

// Modal overlay click handler
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});
