const plusSigns = document.querySelectorAll('.plus-sign');
const overlays = document.querySelectorAll('.overlay');

plusSigns.forEach((plusSign, index) => {
  plusSign.addEventListener('click', () => {
    overlays.forEach((overlay, i) => {
      if (i !== index) {
        overlay.style.height = '0';
      } else {
        overlay.style.height = '50%';
      }
    });
  });
});
