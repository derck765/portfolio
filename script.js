function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentProject = 0;

function changeProject(direction) {
  const track = document.getElementById("projectTrack");
  const totalProjects = track.children.length;

  currentProject =
    (currentProject + direction + totalProjects) % totalProjects;

  track.style.transform = `translateX(-${currentProject * 100}%)`;
}