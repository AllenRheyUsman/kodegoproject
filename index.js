const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


function toonIn() {
    window.location.href = "userpage.html";
  }

          //  array shortcut for collapseimages using for loop
const collapseImages = [];
const totalImages = 12;
const basePath = 'images/edited/imagesedits';

for (let i = 1; i <= totalImages; i++) {
  collapseImages.push(`${basePath}${i}.png`);
}

            // array shortcut for images using for loop

            
const images = [];
const totalImages2 = 12;
const basePath2 = 'images/edited/imagesedits';

for (let i = 1; i <= totalImages2; i++) {
images.push(`${basePath2}${i}.png`);
}

const samplemodals = document.querySelectorAll('.samplemodal');
const modalImage = document.getElementById('modalImage');


// Function to set the background image for the .samplemodal element
function setSampleModalBackground(index) {
  samplemodals[index].style.backgroundImage = `url(${images[index % images.length]})`;
}

function maramingPicture(index) {
  modalImage.src = images[index % images.length];

  // Update the image source inside the collapse element
 
    const collapseImage = document.querySelector('#collapsepix');
  collapseImage.src = collapseImages[index % collapseImages.length];

}

for (let i = 0; i < samplemodals.length; i++) {
  // Set the background image for each .samplemodal element
  setSampleModalBackground(i);

  samplemodals[i].addEventListener('click', function () {
    maramingPicture(i);
  });
}





