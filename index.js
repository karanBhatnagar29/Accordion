let dropBtn = document.getElementsByClassName("fa-plus");
let dropUp = document.getElementsByClassName("fa-x");

let itemDiv = document.getElementsByClassName("item");
let description = document.getElementsByClassName("description");
// console.log(dropUp);

for (let i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener("click", () => {
    itemDiv[i].classList.toggle("active");
    dropBtn[i].style.display = "none";
    dropUp[i].style.display = "inline-block";
  });
}

for (let i = 0; i < dropUp.length; i++) {
  dropUp[i].addEventListener("click", () => {
    dropUp[i].style.display = "none";
    dropBtn[i].style.display = "inline-block";
    itemDiv[i].classList.toggle("active");
  });
}
