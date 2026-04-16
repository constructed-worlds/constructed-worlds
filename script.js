const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".rectangle");

let activeYear = "*";
let activeCountry = "*";

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const year = button.dataset.year;
    const country = button.dataset.country;

    // -----------------------
    // UPDATE STATE SAFELY
    // -----------------------
    if (year !== undefined) {
      activeYear = (activeYear === year) ? "*" : year;
    }

    if (country !== undefined) {
      activeCountry = (activeCountry === country) ? "*" : country;
    }

    // -----------------------
    // RESET BUTTON STATES
    // -----------------------
    buttons.forEach(btn => {
      btn.classList.remove("active-year", "active-country");
    });

    // Reapply active styles safely (no querySelector needed)
    buttons.forEach(btn => {
      if (btn.dataset.year === activeYear) {
        btn.classList.add("active-year");
      }
      if (btn.dataset.country === activeCountry) {
        btn.classList.add("active-country");
      }
    });

    // -----------------------
    // FILTER ITEMS
    // -----------------------
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