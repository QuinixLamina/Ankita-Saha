let modal = document.getElementById("modal");
let modalImg = document.querySelector(".modal-content");
let images = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    currentIndex = index;
  });
});

function closeModal() {
  modal.style.display = "none";
}

function changePhoto(n) {
  currentIndex += n;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
