let overlay = document.querySelector("aside");
overlay.addEventListener("click", (e) => {
  if (e.target.localName == "aside") {
    overlay.style.display = "none";
  }
});

let overlayImg = document.querySelector("#overlay-img");
let overlayCaption = document.querySelector("#overlay-caption");

let visit = document.querySelector("#visit");
let close = document.querySelector("#close").addEventListener("click", (e) => {
  overlay.style.display = "none";
  e.preventDefault();
});

let tiles = Array.from(document.querySelectorAll(".project-tile"));
for (let x of tiles) {
  x.addEventListener("click", (e) => {
    const nameOfTarget = e.target.localName;
    let projectTitle, imageLink, description;

    if (nameOfTarget == "img") {
      imageLink = e.target.src;
      projectTitle = e.target.parentElement.children[1].innerText;
    } else if (nameOfTarget == "p") {
      imageLink = e.target.parentElement.children[0].src;
      projectTitle = e.target.innerText;
    } else if (nameOfTarget == "a") {
      imageLink = e.target.children[0].src;
      projectTitle = e.target.children[1].innerText;
    }

    overlayImg.src = imageLink;
    overlayCaption.children[0].innerText = projectTitle;
    visit.href = x.href;
    document.querySelector("#overlay-caption p").innerText = x.children[2].innerText;
    overlay.style.display = "flex";

    e.preventDefault();
  });
}

const present = new Date();
document.getElementById("date").innerText = present.getFullYear();
