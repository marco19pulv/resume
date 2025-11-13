let alerted = false;

function checkScreenSize() {
  if (window.innerWidth < 768 && !alerted) {
    alert("Screen size is less than 768px!\nThe resume will be displayed in reduced version.");
    alerted = true; // Evita ulteriori alert
  } else if (window.innerWidth >= 768) {
    alerted = false; // Resetta il flag se la dimensione torna sopra i 768px
  }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();