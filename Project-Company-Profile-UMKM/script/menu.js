// Menu tabs + search functionality
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".menu-item");
const searchInput = document.getElementById("menuSearch");
const emptyState = document.getElementById("menuEmpty");
let activeCat = "all";

function renderMenu() {
  const q = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  items.forEach((item) => {
    const matchesCat = activeCat === "all" || item.dataset.cat === activeCat;
    const matchesSearch = item.dataset.name.includes(q);
    const show = matchesCat && matchesSearch;
    item.classList.toggle("hidden", !show);
    if (show) visibleCount++;
  });
  emptyState.classList.toggle("hidden", visibleCount !== 0);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove(
        "active",
        "bg-copper",
        "border-copper",
        "text-cream-soft",
      );
      t.classList.add("text-[#E9DCCF]");
    });
    tab.classList.add(
      "active",
      "bg-copper",
      "border-copper",
      "text-cream-soft",
    );
    tab.classList.remove("text-[#E9DCCF]");
    activeCat = tab.dataset.cat;
    renderMenu();
  });
});

searchInput.addEventListener("input", renderMenu);
