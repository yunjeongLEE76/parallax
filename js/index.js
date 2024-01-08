const progressBar = document.querySelector(".bar");
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd");
const contWrap = document.querySelector(".contWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
const coverHeight = window.innerHeight / 2;

coverWrap.style.height = `${coverHeight}px`;
contWrap.style.marginTop = `${coverHeight}px`;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight =
    document.body.scrollHeight + coverHeight - window.innerHeight;

  per = percent(scrollNum, documentHeight);
  progressBar.style.width = `${per}%`;

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 10}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 4}px`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};
