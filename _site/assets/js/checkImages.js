function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".store-item img");
    items.forEach(img => {
      const url = img.getAttribute("src");
      checkImageExists(url, exists => {
        if (!exists) {
          img.src = './assets/images/items/default.webp';
        }
      });
    });
  });