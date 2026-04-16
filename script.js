const mainImage = document.getElementById("current");
const thumbnails = document.querySelectorAll(".thumb");
const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".rectangle");

// ----------------------
// THUMBNAILS (separate logic)
// ----------------------
thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;

    thumbnails.forEach(t => t.classList.remove("active"));
    img.classList.add("active");
  });
});

// ----------------------
// FILTER STATE
// ----------------------
let activeYear = "*";
let activeCountry = "*";

// ----------------------
// FILTER BUTTONS
// ----------------------
buttons.forEach(button => {
  button.addEventListener("click", () => {

    const year = button.dataset.year;
    const country = button.dataset.country;

    // ----------------------
    // UPDATE STATE
    // ----------------------
    if (year !== undefined) {
      activeYear = year;
    }

    if (country !== undefined) {
      activeCountry = country;
    }

    // ----------------------
    // BUTTON VISUAL STATE
    // ----------------------
    buttons.forEach(btn => btn.classList.remove("active"));

    if (activeYear !== "*") {
      const yearBtn = document.querySelector(`[data-year="${activeYear}"]`);
      yearBtn?.classList.add("active");
    }

    if (activeCountry !== "*") {
      const countryBtn = document.querySelector(`[data-country="${activeCountry}"]`);
      countryBtn?.classList.add("active");
    }

    // ----------------------
    // FILTER ITEMS
    // ----------------------
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