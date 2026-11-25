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

  currentProject = (currentProject + direction + totalProjects) % totalProjects;

  track.style.transform = `translateX(-${currentProject * 100}%)`;

  if (window.matchMedia("(max-width: 1200px)").matches) {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const projectImageDialog = document.querySelector(".project-image-dialog");
const projectImagePreview = document.querySelector(".project-image-dialog-img");

function openProjectImage(image) {
  projectImagePreview.src = image.src;
  projectImagePreview.alt = image.alt;
  projectImageDialog.showModal();
}

document.querySelectorAll(".project-img").forEach((image) => {
  image.addEventListener("click", () => openProjectImage(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectImage(image);
    }
  });
});

document
  .querySelector(".project-image-dialog-close")
  .addEventListener("click", () => projectImageDialog.close());

projectImageDialog.addEventListener("click", (event) => {
  if (event.target === projectImageDialog) {
    projectImageDialog.close();
  }
});
