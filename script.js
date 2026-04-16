const mainImage = document.getElementById("current");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(img => {
    img.addEventListener("click", () => {

        mainImage.src = img.src;

        thumbnails.forEach(t => t.classList.remove("active"));

        img.classList.add("active");
    });
});


const rectangles = document.querySelectorAll(".rectangle, .rectangle2, .rectangle3");

rectangles.forEach(rect => {
    rect.addEventListener("click", () => {

        rectangles.forEach(r => r.classList.remove("active"));

        rect.classList.add("active");
    });
});

const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".rectangle");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.year.replace('.', ''); // "y1970s"

    items.forEach(item => {
      if (!filter || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});