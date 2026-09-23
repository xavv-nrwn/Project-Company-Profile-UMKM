// Toast notification
function dismissToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("opacity-0", "translate-y-5", "pointer-events-none");
}

// Show toast after delay
setTimeout(() => {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.add("flex");
}, 1200);
