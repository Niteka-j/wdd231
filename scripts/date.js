// Dynamic date & copyright updates for the footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedP = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedP) {
    lastModifiedP.innerHTML = `Last Modification: ${document.lastModified}`;
  }
});