function toggleHeader() {
    const header = document.getElementById('main-header');
    header.classList.toggle('expanded');
}

const year = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${year} Yuganta`;

function disableRightClick(event) {
    if (event.button == 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      return false;
    }
  }