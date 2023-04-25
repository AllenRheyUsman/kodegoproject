const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



function toonIn() {
    window.location.href = "userpage.html";
  }








  const samplemodals = document.querySelectorAll('.samplemodal');
  const modalImage = document.getElementById('modalImage');
  
  const images = [
       'images/tomorrow.jpg',
      'images/asia.jpg',
      'images/holo love.jpg',
      'images/the villains.jpg',
      'images/blade.png',
      'images/2521.jpg',

  ];
  
  function handleSampleModalClick(index) {
    modalImage.src = images[index % images.length];
  }
  
  for (let i = 0; i < samplemodals.length; i++) {
    samplemodals[i].addEventListener('click', function () {
      handleSampleModalClick(i);
    });
  }
  


















//   document.addEventListener('DOMContentLoaded', function () {
//     const samplemodals = document.querySelectorAll('.samplemodal');
//     const modalImage = document.getElementById('modalImage');
//     const images = [
//       'images/tomorrow.jpg',
//       'images/asia.jpg',
//       'images/holo love.jpg',
//       'images/the villains.jpg',
//       'images/blade.png',
//       'images/2521.jpg',
      
//       // Add more images as needed
//     ];
  
//     samplemodals.forEach((samplemodal, index) => {
//       samplemodal.addEventListener('click', function () {
//         modalImage.src = images[index % images.length];
//       });
//     });
//   });
  