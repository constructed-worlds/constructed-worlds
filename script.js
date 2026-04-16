const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".rectangle");

let activeYear = "*";
let activeCountry = "*";

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const year = button.dataset.year;
    const country = button.dataset.country;

    // -------------------------
    // UPDATE STATE
    // -------------------------
    if (year !== undefined) {
      activeYear = year;
    }

    if (country !== undefined) {
      activeCountry = country;
    }

    // If "All" clicked → reset everything
    if (activeYear === "*" && activeCountry === "*") {
      activeYear = "*";
      activeCountry = "*";
    }

    // -------------------------
    // BUTTON VISUAL STATE RESET
    // -------------------------
    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Highlight current active buttons
    buttons.forEach(btn => {
      if (btn.dataset.year === activeYear && activeYear !== "*") {
        btn.classList.add("active");
      }
      if (btn.dataset.country === activeCountry && activeCountry !== "*") {
        btn.classList.add("active");
      }
      if (activeYear === "*" && activeCountry === "*" && btn.dataset.year === "*" && btn.dataset.country === "*") {
        btn.classList.add("active");
      }
    });

    // -------------------------
    // FILTER ITEMS
    // -------------------------
    items.forEach(item => {

      const matchesYear =
        activeYear === "*" ||
        item.classList.contains(activeYear.replace(".", ""));

      const matchesCountry =
        activeCountry === "*" ||
        item.classList.contains(activeCountry.replace(".", ""));

      item.classList.toggle("hidden", !(matchesYear && matchesCountry));

    });

  });
});