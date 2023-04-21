const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



// const slider = document.querySelector(".slider");
// const items = document.querySelectorAll(".slider-item");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// let currentIndex = 0;
// const slideWidth = items[0].clientWidth;
// const totalSlides = items.length;

// slider.style.width = `${slideWidth * totalSlides}px`;

// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < totalSlides - 1) {
//     currentIndex++;
//     slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//   }
// });
